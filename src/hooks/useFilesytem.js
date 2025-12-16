import { useState } from "react";
import { Default_Filesystem } from "../constants/defaultFilesys";

export default function useFilesystem(){
    const [fileSystem,setFileSystem] = useState(Default_Filesystem)
    const [currentPath,setCurrentPath] = useState("/home");

    const ls = () =>{
        
    }







}