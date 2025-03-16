"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  // CheckCircleIcon,
  CircleArrowDown,
  // HammerIcon,
  RocketIcon,
  // SaveIcon,
} from "lucide-react";

function FileUploader() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onDrop = useCallback((acceptedFiles: File[]) => {}, []);

  const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } =
    useDropzone({
      onDrop,
    });
  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto">
      <div
        {...getRootProps()}
        className={`p-10 border-2 border-dashed mt-10 w-[90%] border-[#0F3AAE] text-[#0F3AAE] rounded-lg h-96 flex items-center justify-center ${
          isFocused || isDragAccept ? "bg-[#89c8ff]" : "bg-indigo-[#d8ebff]"
        }`}
      >
        <input {...getInputProps()} />

        <div className="flex flex-col items-center justify-center cursor-pointer">
          {isDragActive ? (
            <>
              <RocketIcon className="h-20 w-20 animate-ping" />
              <p>Drop the files here ...</p>
            </>
          ) : (
            <>
              <CircleArrowDown className="h-20 w-20 animate-bounce" />
              <p>Drag n drop some files here, or click to select files</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FileUploader;
