import Webcam from "react-webcam";
import { useCallback, useRef, useState ,useEffect } from "react"; // import useCallback


const CaptureImage = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  // create a capture function


  
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
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