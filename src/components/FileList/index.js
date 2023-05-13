import {
  FileContainer,
  MainContainer,
  ImageText,
  RemoveImage,
  FileNameContainer
} from "./index.styled";
import Danger from "../../assests/icons/danger.svg";
import CancelImage from "../../assests/icons/cancel.png";

const FileList = (props) => {
  const { files, onRemoveFile } = props;
  return (
    <FileContainer>
      {files.length > 0 ? (
        files.map((file, index) => {
          return (
            <MainContainer key={index}>
              <FileNameContainer>
             
              <img src={Danger} alt="blank_img" />
              <ImageText>
                {file.name.length > 15
                  ? file.name.substring(0, 15) + "..."
                  : file.name}
              </ImageText>
              </FileNameContainer>
              <RemoveImage
                src={CancelImage}
                onClick={() => onRemoveFile(index)}
              />
            </MainContainer>
          );
        })
      ) : (
        <div className="fileInputText">Oops! no files</div>
      )}
    </FileContainer>
  );
};

export default FileList;
