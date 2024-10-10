import tensorflow as tf
import tensorflow_datasets as tfds

# Load the mini Speech Commands dataset
DATASET_PATH = 'data/mini_speech_commands'
data_dir = pathlib.Path(DATASET_PATH)
if not data_dir.exists():
    tf.keras.utils.get_file(
        'mini_speech_commands.zip',
        origin="http://storage.googleapis.com/download.tensorflow.org/data/mini_speech_commands.zip",
        extract=True,
        cache_dir='.', cache_subdir='data')

# Convert waveforms to spectrograms
def waveform_to_spectrogram(waveform):
    spectrogram = tf.signal.stft(waveform, frame_length=255, frame_step=128)
    spectrogram = tf.abs(spectrogram)
    return spectrogram

# Build and train the model
def build_model(input_shape, num_classes):
    model = tf.keras.Sequential([
        tf.keras.layers.Input(shape=input_shape),
        tf.keras.layers.Lambda(waveform_to_spectrogram),
        tf.keras.layers.Conv2D(32, 3, activation='relu'),
        tf.keras.layers.Conv2D(64, 3, activation='relu'),
        tf.keras.layers.MaxPooling2D(),
        tf.keras.layers.Dropout(0.25),
        tf.keras.layers.Flatten(),
        tf.keras.layers.Dense(128, activation='relu'),
        tf.keras.layers.Dropout(0.5),
        tf.keras.layers.Dense(num_classes)
    ])
    return model

# Evaluate the model performance
def evaluate_model(model, test_dataset):
    test_audio = []
    test_labels = []
    for audio, label in test_dataset:
        test_audio.append(audio.numpy())
        test_labels.append(label.numpy())

    test_audio = np.array(test_audio)
    test_labels = np.array(test_labels)

    loss, accuracy = model.evaluate(test_audio, test_labels)
    return accuracy

# Train the model
def train_model():
    # Load the dataset
    train_dataset = tf.keras.preprocessing.timeseries_dataset_from_array(
        x_train, y_train, sequence_length=100, batch_size=64)
    test_dataset = tf.keras.preprocessing.timeseries_dataset_from_array(
        x_test, y_test, sequence_length=100, batch_size=64)

    # Build the model
    input_shape = (None, x_train.shape[-1])
    num_classes = len(np.unique(y_train))
    model = build_model(input_shape, num_classes)

    # Train the model
    model.compile(loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
                  optimizer=tf.keras.optimizers.Adam(),
                  metrics=['accuracy'])
    history = model.fit(train_dataset, epochs=10, validation_data=test_dataset)

    # Evaluate the model
    accuracy = evaluate_model(model, test_dataset)
    print(f'Test accuracy: {accuracy}')
