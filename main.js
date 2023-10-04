var fs = require("fs");

fs.readFile("data.json", (err, AllDataFromJson) => {
    if (err === null) {
        const data_list = JSON.parse(AllDataFromJson);
        for (let data of data_list)
        {
            if (data["ku"] === "13" && data["value"] > 5)
            {
                fs.appendFile ('output.txt', data ["value"] + "\n", function(err) {
                    if(err) {
                        return console.log(err);
                    }
                    console.log("The file was saved!");
                }); 
            }
        }
    }
});

