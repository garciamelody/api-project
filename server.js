const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const characters = {
    'chrom':{
        'startingClass': 'Lord',
        'nationality': 'Ylisse',
        'weapon': 'Falchion'
    },
    'lissa':{
        'startingClass': 'Cleric',
        'nationality': 'Ylisse',
        'weapon': 'Staff'  
    },
    'panne':{
        'startingClass': 'Taguel',
        'nationality': 'Taguel',
        'weapon': 'Beast'  
    },
    'frederick':{
        'startingClass': 'Great Knight',
        'nationality': 'Ylisse',
        'weapon': 'Silver Lance'  
    },
    'tiki':{
        'startingClass': 'Manakete',
        'nationality': 'Divine Dragon',
        'weapon': 'Dragonstone'  
    },
    'virion':{
        'startingClass': 'Archer',
        'nationality': 'Valm',
        'weapon': 'bow'  
    },
    'sully':{
        'startingClass': 'Cavalier',
        'nationality': 'Ylisse',
        'weapon': 'lance'  
    },
    'vaike':{
        'startingClass': 'Fighter',
        'nationality': 'Ylisse',
        'weapon': 'Axe'  
    },
    'gaius':{
        'startingClass': 'Thief',
        'nationality': 'Ylisse',
        'weapon': 'Sword'  
    },
    'miriel':{
        'startingClass': 'Mage',
        'nationality': 'Ylisse',
        'weapon': 'Tome'  
    },
    'kellam':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'cordelia':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'flavia':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'libra':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'olivia':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'tharja':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    "lon'qu":{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'nowi':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'gregor':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'sumia':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'henry':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'cherche':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'priam':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'ricken':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'maribelle':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'basilio':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    "yen'fay":{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    "say'ri":{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'stahl':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'gangrel':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'aversa':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'walhart':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'emmeryn':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'anna':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'donnel':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'lucina':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'gerome':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'owain':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'kjelle':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'inigo':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'severa':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'noire':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'yarne':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'laurent':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'brady':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'nah':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'cynthia':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'morgan':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'validar':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'phila':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'hierarch':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'naga':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'gyral':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'dalen':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'old hubba':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'grima':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'cervantes':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'excellus':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'garrick':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'raimi':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'roddick':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'victor':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'vincent':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'orton':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'vasto':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'chalard':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'campari':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'mustafa':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'dalton':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'gecko':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'jamil':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'xalbador':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'cassius':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'ruger':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'nelson':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'holland':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'morristan':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'nombry':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'ezra':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'ignatius':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'farber':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'pheros':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'algol':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'zanth':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'ardri':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'mus':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'bovis':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'tigris':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'lepus':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'draco':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'anguilla':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'equus':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'ovis':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'simia':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'gallus':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'canis':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'porcus':{
        'startingClass': 29,
        'nationality': 'Chancelor Bennet',
        'weapon': 'Chicago, Illinois'  
    },
    'unknown':{
        'startingClass': 0,
        'nationality': 'unknown',
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