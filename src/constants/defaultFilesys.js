export const Default_Filesystem = {
    "/":{
        type:"dir",
        childen:{
            "bin":{...dfDir},
            "etc":{...dfDir},
            "home":{
                ...dfDir,
                children:{
                    "user":{
                        ...dfDir,
                        childen:{
                            "Project":{
                                ...dfDir
                            },
                            "Document":{
                                ...dfDir
                            }
                        }
                    }
                }
            },
            "tmp":{...dfDir},
            "var":{...dfDir}
        }
    }
}
const dfDir = {
    type :"dir",
    childen:{}
}

