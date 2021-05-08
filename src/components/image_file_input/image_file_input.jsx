import styles from './image_file_input.module.css';
import React, { useRef } from 'react';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    const uploaded = await imageUploader.upload(event.target.files[0]);
    onFileChange({ name: uploaded.original_filename, url: uploaded.url });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type='file'
        accept='image'
        name='file'
        onChange={onChange}
      />
      <button className={styles.button} onClick={onClick}>
        {name || 'No file'}
      </button>
    </div>
  );
  // const fileRef = useRef();
  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(fileRef.current);
  //   // uploadImage()
  // };
  // return (
  //   <form onSubmit={onSubmit}>
  //     <input ref={fileRef} type='file' name='file' />
  //     <input type='submit' value='upload' name='submit' />
  //   </form>
  // );
};

export default ImageFileInput;
