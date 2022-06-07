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
        'weapon': 'Beaststone'  
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
        'startingClass': 'Mercenary',
        'birthPlace': 'Nohr',
        'weapon': 'Sword'  
    },
    'severa':{
        'startingClass': 'Mercenary',
        'birthPlace': 'Nohr',
        'weapon': 'Sword'  
    },
    'noire':{
        'startingClass': 'Archer',
        'birthPlace': 'Plegia',
        'weapon': 'Bow'  
    },
    'yarne':{
        'startingClass': 'Taguel',
        'birthPlace': 'Unknown',
        'weapon': 'Beaststone'  
    },
    'laurent':{
        'startingClass': 'Mage',
        'birthPlace': 'Unknown',
        'weapon': 'Tome'  
    },
    'brady':{
        'startingClass': 'Priest',
        'birthPlace': 'Unknown',
        'weapon': 'Staff'  
    },
    'nah':{
        'startingClass': 'Manakete',
        'birthPlace': 'Unknown',
        'weapon': 'Dragonstone'  
    },
    'cynthia':{
        'startingClass': 'Pegasus Knight',
        'birthPlace': 'Chancelor Bennet',
        'weapon': 'Lance'  
    },
    'morgan':{
        'startingClass': 'Varies',
        'birthPlace': 'Unknown',
        'weapon': 'Varies'  
    },
    'validar':{
        'startingClass': 'Sorcerer',
        'birthPlace': 'Plegia',
        'weapon': 'Tome'  
    },
    'robin':{
        'startingClass': 'Tactician',
        'birthPlace': 'Plegia',
        'weapon': 'Tome'  
    },
    'phila':{
        'startingClass': 'Falcon Knight',
        'birthPlace': 'Ylisse',
        'weapon': 'Lance'  
    },
    'hierarch':{
        'startingClass': 'Priest',
        'birthPlace': 'Unknown',
        'weapon': 'Unknown'  
    },
    'naga':{
        'startingClass': 'Divine Dragon',
        'birthPlace': 'Unknown',
        'weapon': 'Breath'  
    },
    'gyral':{
        'startingClass': 'General',
        'birthPlace': 'Plegia',
        'weapon': 'Tomahawk'  
    },
    'dalen':{
        'startingClass': 'Paladin',
        'birthPlace': 'Plegia',
        'weapon': 'Spear'  
    },
    'grima':{
        'startingClass': 'Grima',
        'birthPlace': 'Thabes',
        'weapon': 'Breath'  
    },
    'cervantes':{
        'startingClass': 'General',
        'birthPlace': 'Valm',
        'weapon': 'Tomahawk'  
    },
    'excellus':{
        'startingClass': 'Sage',
        'birthPlace': 'Valm',
        'weapon': 'Tome'  
    },
    'garrick':{
        'startingClass': 'Barbarian',
        'birthPlace': 'Plegia',
        'weapon': 'Axe'  
    },
    'raimi':{
        'startingClass': 'Knight',
        'birthPlace': 'Ferox',
        'weapon': 'Lance'  
    },
    'roddick':{
        'startingClass': 'Barbarian',
        'birthPlace': 'Ylisse',
        'weapon': 'Axe'  
    },
    'victor':{
        'startingClass': 'Berserker',
        'birthPlace': 'Ferox',
        'weapon': 'Axe'  
    },
    'vincent':{
        'startingClass': 'Berserker',
        'birthPlace': 'Ferox',
        'weapon': 'Axe' 
    },
    'orton':{
        'startingClass': 'Wyvern Rider',
        'birthPlace': 'Plegia',
        'weapon': 'Axe'
    },
    'vasto':{
        'startingClass': 'Wyvern Rider',
        'birthPlace': 'Plegia',
        'weapon': 'Axe'  
    },
    'chalard':{
        'startingClass': 'Dark Mage',
        'birthPlace': 'Plegia',
        'weapon': 'Tome'  
    },
    'campari':{
        'startingClass': 'General',
        'birthPlace': 'Plegia',
        'weapon': 'Lance'  
    },
    'mustafa':{
        'startingClass': 'Berserker',
        'birthPlace': 'Plegia',
        'weapon': 'Axe'  
    },
    'dalton':{
        'startingClass': 'Paladin',
        'birthPlace': 'Valm',
        'weapon': 'Lance'  
    },
    'gecko':{
        'startingClass': 'Assassin',
        'birthPlace': 'Valm',
        'weapon': 'Sword'  
    },
    'jamil':{
        'startingClass': 'Assassin',
        'birthPlace': 'Plegia',
        'weapon': 'Sword'  
    },
    'xalbador':{
        'startingClass': 'Hero',
        'birthPlace': 'Valm',
        'weapon': 'Weapon'  
    },
    'cassius':{
        'startingClass': 'Sorcerer',
        'birthPlace': 'Ferox',
        'weapon': 'Tome'  
    },
    'ruger':{
        'startingClass': 'Trickster',
        'birthPlace': 'Valm',
        'weapon': 'Sword'  
    },
    'nelson':{
        'startingClass': 'Sage',
        'birthPlace': 'Valm',
        'weapon': 'Tome'  
    },
    'holland':{
        'startingClass': 'Villager',
        'birthPlace': 'Ylisse',
        'weapon': 'Lance'  
    },
    'morristan':{
        'startingClass': 'Berserker',
        'birthPlace': 'Valm',
        'weapon': 'Axe'  
    },
    'nombry':{
        'startingClass': 'Warrior',
        'birthPlace': 'Ylisse',
        'weapon': 'Axe'  
    },
    'ezra':{
        'startingClass': 'Bow Knight',
        'birthPlace': 'Ferox',
        'weapon': 'Bow'  
    },
    'ignatius':{
        'startingClass': 'General',
        'birthPlace': 'Valm',
        'weapon': 'Lance'  
    },
    'farber':{
        'startingClass': 'Dark Knight',
        'birthPlace': 'Valm',
        'weapon': 'Tome'  
    },
    'pheros':{
        'startingClass': 'Valkyrie',
        'birthPlace': 'Valm',
        'weapon': 'Staff'  
    },
    'algol':{
        'startingClass': 'Berserker',
        'birthPlace': 'Plegia',
        'weapon': 'Axe'  
    },
    'zanth':{
        'startingClass': 'Berserker',
        'birthPlace': 'Ylisse',
        'weapon': 'Axe'  
    },
    'ardri':{
        'startingClass': 'Sorcerer',
        'birthPlace': 'Plegia',
        'weapon': 'Tome'  
    },
    'mus':{
        'startingClass': 'General',
        'birthPlace': 'Plegia',
        'weapon': 'Lance'  
    },
    'bovis':{
        'startingClass': 'Bow Knight',
        'birthPlace': 'Plegia',
        'weapon': 'Sword'  
    },
    'tigris':{
        'startingClass': 'Warrior',
        'birthPlace': 'Plegia',
        'weapon': 'Axe'  
    },
    'lepus':{
        'startingClass': 'War Cleric',
        'birthPlace': 'Unknown',
        'weapon': 'Axe'  
    },
    'draco':{
        'startingClass': 'Sniper',
        'birthPlace': 'Unknown',
        'weapon': 'Bow'  
    },
    'anguilla':{
        'startingClass': 'Dark Knight',
        'birthPlace': 'Unknown',
        'weapon': 'Tome'  
    },
    'equus':{
        'startingClass': 'Paladin',
        'birthPlace': 'Unknown',
        'weapon': 'Lance'  
    },
    'ovis':{
        'startingClass': 'Sage',
        'birthPlace': 'Unknown',
        'weapon': 'Tome'  
    },
    'simia':{
        'startingClass': 'Swordmaster',
        'birthPlace': 'Unknown',
        'weapon': 'Sword'  
    },
    'gallus':{
        'startingClass': 'Sorcerer',
        'birthPlace': 'Unknown',
        'weapon': 'Tome'  
    },
    'canis':{
        'startingClass': 'Valkyrie',
        'birthPlace': 'Unknown',
        'weapon': 'Tome'  
    },
    'porcus':{
        'startingClass': 'Assassin',
        'birthPlace': 'Unknown',
        'weapon': 'Sword'  
    },
    'unknown':{
        'startingClass': 'N/A',
        'birthPlace': 'N/A',
        'weapon': 'N/A'
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