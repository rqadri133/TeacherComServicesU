import Webcam from "react-webcam";
import { useCallback, useRef, useState ,usef } from "react"; // import useCallback
import base64 from "base-64"
const CaptureImage = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  // create a capture function


  const captureShortVideo = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    const base64_encoded = base64.encode(imageSrc);
    console.log(base64_encoded);

  }, [webcamRef]);


  

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    const base64_encoded = base64.encode(imageSrc);
    console.log(base64_encoded);

  }, [webcamRef]);

  return (
    <div className="container">
    {imgSrc ? (
      <img src={imgSrc} alt="webcam" />
    ) : (
      <Webcam height={600} width={600} ref={webcamRef} />
    )}
    <div className="btn-container">
      <button onClick={capture}>Capture photo</button>
    </div>
  </div>
 );

    // rest of the code
  
};

export default CaptureImage;