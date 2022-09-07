function generateNewFolderName(existingFolders) {
    if (!existingFolders) {
        return "New Folder"
    };

    if(!existingFolders.includes("New Folder")) {
        return "New Folder"
    } else {
        let n = 2;

        while(existingFolders.includes(`New Folder (${n})` )){
            n += 1;
        };
        return `New Folder (${n})`;

    };

}
  
  // Should print: "New Folder (2)"
  console.log(generateNewFolderName(["New Folder", "New Folder (3)", "New Folder (4)"]));