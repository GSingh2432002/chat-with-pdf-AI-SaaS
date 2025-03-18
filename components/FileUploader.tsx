"use client";

import { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import {
  // CheckCircleIcon,
  CircleArrowDown,
  // HammerIcon,
  RocketIcon,
  // SaveIcon,
} from "lucide-react";
import useUpload from "@/hooks/useUpload";
import { useRouter } from "next/navigation";
import { stat } from "fs";

function FileUploader() {
  const { progress, status, fileId, handleUpload } = useUpload();
  const router = useRouter();

  useEffect(() => {
    if (fileId) {
      router.push(`/dashboard/${fileId}`);
    }
  }, [fileId, router]);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      await handleUpload(file);
    } else {
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      accept: {
        "application/pdf": [".pdf"],
      },
    });
  const uploadInProgress = progress != null && progress >= 0 && progress <= 100;
  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto">
      {/* Loading... */}
      {uploadInProgress && (
        <div>
          <div
            className={`radial-progress bg-[##89c8ff] text-white border-[#0F3AAE] border-4 ${
              progress === 100 && "hidden"
            }`}
            role="progressbar"
            style={{
              // @ts-ignore
              "--value": progress,
              "--size": "4rem",
              "--thickness": "1.3rem",
            }}
          >
            {progress} %{/* Render Status Icon */}
            {/* @ts-ignore */}
            <p>{status}</p>
          </div>
        </div>
      )}

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
