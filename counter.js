var fs = require("fs")
var data = {}

data.avatar = {}
data.avatar["length"] = fs.readdirSync("./set").length
data.avatar.files = fs.readdirSync("./set")

var count = 0
data.avatar.files.map((Element) => {
    data.avatar.files[count] = "https://raw.githubusercontent.com/phaticusthiccy/avatar-dataset/master/set/" + Element
    count++
})
count = 0

data.anime = {}
data.anime["length"] = fs.readdirSync("./anime").length
data.anime.files = fs.readdirSync("./anime")

data.anime.files.map((Element) => {
    data.anime.files[count] = "https://raw.githubusercontent.com/phaticusthiccy/avatar-dataset/master/anime/" + Element
    count++
})
count = 0

data.furry = {}
data.furry["length"] = fs.readdirSync("./furry").length
data.furry.files = fs.readdirSync("./furry")

data.furry.files.map((Element) => {
    data.furry.files[count] = "https://raw.githubusercontent.com/phaticusthiccy/avatar-dataset/master/furry/" + Element
    count++
})
count = 0

data.pepe = {}
data.pepe["length"] = fs.readdirSync("./pepe").length
data.pepe.files = fs.readdirSync("./pepe")

data.pepe.files.map((Element) => {
    data.pepe.files[count] = "https://raw.githubusercontent.com/phaticusthiccy/avatar-dataset/master/pepe/" + Element
    count++
})
count = 0

data.pony = {}
data.pony["length"] = fs.readdirSync("./pony").length
data.pony.files = fs.readdirSync("./pony")

data.pony.files.map((Element) => {
    data.pony.files[count] = "https://raw.githubusercontent.com/phaticusthiccy/avatar-dataset/master/pony/" + Element
    count++
})
count = 0

data.number = {}
data.number["length"] = fs.readdirSync("./others/phones").length
data.number.files = fs.readdirSync("./others/phones")


return fs.writeFileSync("./data.json", JSON.stringify(data, null, 2))