const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const characters = {
    'chrom':{
        'startingClass': 'Lord',
        'birthPlace': 'Ylisse',
        'weapon': 'Falchion'
    },
    'lissa':{
        'startingClass': 'Cleric',
        'birthPlace': 'Ylisse',
        'weapon': 'Staff'  
    },
    'panne':{
        'startingClass': 'Taguel',
        'birthPlace': 'Taguel',
        'weapon': 'Beast'  
    },
    'frederick':{
        'startingClass': 'Great Knight',
        'birthPlace': 'Ylisse',
        'weapon': 'Silver Lance'  
    },
    'tiki':{
        'startingClass': 'Manakete',
        'birthPlace': 'Divine Dragon',
        'weapon': 'Dragonstone'  
    },
    'virion':{
        'startingClass': 'Archer',
        'birthPlace': 'Valm',
        'weapon': 'bow'  
    },
    'sully':{
        'startingClass': 'Cavalier',
        'birthPlace': 'Ylisse',
        'weapon': 'lance'  
    },
    'vaike':{
        'startingClass': 'Fighter',
        'birthPlace': 'Ylisse',
        'weapon': 'Axe'  
    },
    'gaius':{
        'startingClass': 'Thief',
        'birthPlace': 'Ylisse',
        'weapon': 'Sword'  
    },
    'miriel':{
        'startingClass': 'Mage',
        'birthPlace': 'Ylisse',
        'weapon': 'Tome'  
    },
    'kellam':{
        'startingClass': 'Knight',
        'birthPlace': 'Ylisse',
        'weapon': 'Lance'  
    },
    'cordelia':{
        'startingClass': 'Pegasus Knight',
        'birthPlace': 'Ylisse',
        'weapon': 'Lance'  
    },
    'flavia':{
        'startingClass': 'Hero',
        'birthPlace': 'Ferox',
        'weapon': 'Sword'  
    },
    'libra':{
        'startingClass': 'War Monk',
        'birthPlace': 'Ylisse',
        'weapon': 'Axe'  
    },
    'olivia':{
        'startingClass': 'Dancer',
        'birthPlace': 'Ferox',
        'weapon': 'Sword'  
    },
    'tharja':{
        'startingClass': 'Dark Mage',
        'birthPlace': 'Plegia',
        'weapon': 'Tome'  
    },
    "lon'qu":{
        'startingClass': 'Myrmidon',
        'birthPlace': 'Ferox',
        'weapon': 'Killing Edge'  
    },
    'nowi':{
        'startingClass': 'Manakete',
        'birthPlace': 'Unknown',
        'weapon': 'Dragonstone'  
    },
    'gregor':{
        'startingClass': 'Mercenary',
        'birthPlace': 'Ferox',
        'weapon': 'Sword'  
    },
    'sumia':{
        'startingClass': 'Pegasus Knight',
        'birthPlace': 'Ylisse',
        'weapon': 'Lance'  
    },
    'henry':{
        'startingClass': 'Dark Mage',
        'birthPlace': 'Plegia',
        'weapon': 'Tome'  
    },
    'cherche':{
        'startingClass': 'Wyvern Rider',
        'birthPlace': 'Valm',
        'weapon': 'Axe'  
    },
    'priam':{
        'startingClass': 'Hero',
        'birthPlace': 'Ylisse',
        'weapon': 'Sword'  
    },
    'ricken':{
        'startingClass': 'Mage',
        'birthPlace': 'Ylisse',
        'weapon': 'Tome'  
    },
    'maribelle':{
        'startingClass': 'Troubadour',
        'birthPlace': 'Ylisse',
        'weapon': 'Staff'  
    },
    'basilio':{
        'startingClass': 'Warrior',
        'birthPlace': 'Ferox',
        'weapon': 'Axe'  
    },
    "yen'fay":{
        'startingClass': 'Swordmaster',
        'birthPlace': "Chon'sin",
        'weapon': 'Chicago, Illinois'  
    },
    "say'ri":{
        'startingClass': 'Swordmaster',
        'birthPlace': "Chon'sin",
        'weapon': 'Sword'  
    },
    'stahl':{
        'startingClass': 'Cavalier',
        'birthPlace': 'Ylisse',
        'weapon': 'Sword'  
    },
    'gangrel':{
        'startingClass': 'Trickster',
        'birthPlace': 'Plegia',
        'weapon': 'Sword'  
    },
    'aversa':{
        'startingClass': 'Dark Flier',
        'birthPlace': 'Plegia',
        'weapon': 'Tome'  
    },
    'walhart':{
        'startingClass': 'Conqueror',
        'birthPlace': 'Valm',
        'weapon': 'Sol'  
    },
    'emmeryn':{
        'startingClass': 'Sage',
        'birthPlace': 'Ylisse',
        'weapon': 'Staff'  
    },
    'anna':{
        'startingClass': 'Trickster',
        'birthPlace': 'Ylisse',
        'weapon': 'Sword'  
    },
    'donnel':{
        'startingClass': 'Villager',
        'birthPlace': 'Ylisse',
        'weapon': 'Lance'  
    },
    'lucina':{
        'startingClass': 'Lord',
        'birthPlace': 'Ylisse',
        'weapon': 'Parallel Falchion'  
    },
    'gerome':{
        'startingClass': 'Wyvern Rider',
        'birthPlace': 'Unknown',
        'weapon': 'Axe'  
    },
    'owain':{
        'startingClass': 'Myrmidon',
        'birthPlace': 'Ylisse',
        'weapon': 'Sword'  
    },
    'kjelle':{
        'startingClass': 'Knight',
        'birthPlace': 'Unknown',
        'weapon': 'Lance'  
    },
    'inigo':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'severa':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'noire':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'yarne':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'laurent':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'brady':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'nah':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'cynthia':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'morgan':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'validar':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'phila':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'hierarch':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'naga':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'gyral':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'dalen':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'old hubba':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'grima':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'cervantes':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'excellus':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'garrick':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'raimi':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'roddick':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'victor':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'vincent':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'orton':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'vasto':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'chalard':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'campari':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'mustafa':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'dalton':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'gecko':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'jamil':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'xalbador':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'cassius':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'ruger':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'nelson':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'holland':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'morristan':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'nombry':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'ezra':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'ignatius':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'farber':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'pheros':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'algol':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'zanth':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'ardri':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'mus':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'bovis':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'tigris':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'lepus':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'draco':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'anguilla':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'equus':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'ovis':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'simia':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'gallus':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'canis':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'porcus':{
        'startingClass': 29,
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'unknown':{
        'startingClass': 0,
        'birthPlace': 'unknown',
        'weapon': 'unknown'
    }
}
app.get('/', (request, response) => {
    response.sendFile(__dirname +'/index.html')
})

app.get('/api/:name', (request, response) => {
    const characterName = request.params.name.toLowerCase()
    if(characters[characterName]){
        response.json(characters[characterName])
    }else{
        response.json(characters['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}! Better go catch it!!`)
})