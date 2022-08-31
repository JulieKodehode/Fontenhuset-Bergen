
//Data that I need to map over? to 



export const homeData=[
   {

    id: '001',
    img: require('./assets/Fontenehuset2.jpg'),
    title: "Om huset",
    carouselle:[
    {   
        id: '002',
        image: require('./assets/arbeidsenheter.jpg'),
        text: 'Enheter'
    },

    {
        id: '003',
        image:   require('./assets/møte.jpg'),
        text: 'Møter'
    },
    {
        id: '004',
        image: require('./assets/fritid.jpg'),
        text: 'Fritid'
    }, 

    {

        id: '005',
        image: require('./assets/cafe.jpg'),
        text: 'cafe koppen'
    }
        ]}

 

]

export const meetingData=[

   {
    id: '01',
    img: require('./assets/møte2.jpg'),
    title: "Møter",
    carouselle:[
      {
        id: '1',
        image: require('./assets/menymøte.jpg'),
        header:'Menymøte',
        info: ['Dag: Tirsdager',
               'Tid: 14-15',
                'Hva gjør møte?',
                'Vi bestemmer oss for hva vi skal lage til lunsj for neste uke, basert på hva vi har har råvarer, hva som er sunt og hva vi ønsker å spise ']
       },
       {
        id: '2',
        image:require('./assets/møte2.jpg'),
        header:'Ukemøte',
        info: ['Dag: Onsdager',
                'Tid: 14-15',
                'Hva gjør møte?',
                'Vi snakker om saker som angår huset, store saker må meldes inn på forhånd slik at vi får satt av nok tid til å diskutere dem ']
      },
      {
        id: '3',
        image: require('./assets/Standard.jpg'),
        header:'Standard',
        info: ['Dag: Fredag',
                'Tid: 14-15',
                'Hva gjør møte?',
                'Standarder er retningslinjer som Fontenehuset jobber etter. På dette møtet diskuterer vi hvordan vi forstår de forskjellige stardardene.']
    },

    {

        id: '4',
        image: require('./assets/samarbeid.jpg'),
        header:'Samkjøringsmøte',
        info: ['Dag: Torsdag',
                'Tid: 14.00',
                'Hva gjør møte?',
                'Alle avdelingene informerer kort om hva som skjer på avdelingen. Hva kan de trenge hjelp av andre avdelinger til?']
    },

   ]

}

]

export const sectionData=[
    {

        id: '02',
        img: require('./assets/arbeidsenheter.jpg'),    
        title: "Kontor",
        carouselle:[
                {   
                    id:'10',
                    image: require('./assets/Resepsjon.jpg'),
                    header:'Resepsjon',
                    info:'De som er på kontor har ansvar for resepsjonen, her tar du telefoner, sier god morgen til de som kommer og har oversikt over oppmøte og registreringer'
                },

                {
                    id:'11',
                    image: require('./assets/slette-filer.jpg'),
                    header:'Slette filer',
                    info:'En gang i uken går man igjennom nedlastede filer og sletter dem. Det er viktig for å holde orden i systemene'
                }, 

                {
                    id:'12',
                    image: require('./assets/reachout.jpg'),
                    header: 'Reach out',
                    info: 'De som vil kan sette seg opp til Reach out. Det vil si at hvis du har vært borte en stund fra huset tar vi kontakt med deg for å høre hvordan du har det.'
                }, 

                { 
                  id:'124',
                  image: require('./assets/burdagskort.jpg'),
                  header: 'Bursdagskort',
                  info: 'Alle på huset har bursdag en eller annen gang. Huset ønsker å vise at vi setter pris på medlemmene og ønske de en god bursdag'
                }, 

                { 
                  id:'13',
                  image: require('./assets/tavlemøte.jpg'),
                  header: 'Lede tavlemøte',
                  info: 'Den som leder tavlemøte går igjennom dagens oppgaver og setter opp hvem som gjør hva utfra ønsker til de som er på møte.'
                },

                {
                 id:'14',
                 image: require('./assets/makulere.jpg'),
                 header: 'Makulering',
                 info: 'Papirer som inneholder sensitiv informasjon og som man ikke skal bruke lenger må makuleres.'}
            
                ]
            

        

    },


        

    {   

        id: '03',
        img: require('./assets/Podcast.jpg'),   
        title: "Media",
        carouselle:[
                {   
                    id:'20',
                    image: require('./assets/magasinet2.jpg'),
                    header:'Magasin',
                    info:'Magasinet blir jobbet med på mandager fremover. Vi prøver å finne saker som er interessante og relevante for både huset og andre utenfor. Layout blir laget i InDesign, og vi er veldig stolt over de utgavene vi har laget så langt'
                },

                {
                    id:'21',
                    image: require('./assets/Podcast3.jpg'),
                    header:'Podcast',
                    info:'Podcasten blir jobbet med på tirsdager fremover. Her skal vi både planlegge for å finne gjester og tema, men også prøve oss frem, bli kjent med utstyr og teknikk på et ufarlig nivå'
                },

                {
                    id:'22',
                    image: require('./assets/filserver2.jpg'),
                    header:'Rydde filserver',
                    info:'Onsdager er ryddedag. På vår felles filserver er det et enormt hav av bilder og filer. Det håper vi å få litt orden på etterhvert'
                },

                {
                    id:'23',
                    image: require('./assets/adobe1.png'),
                    header:'Programvare',
                    info:'Torsdag er en dag hvor vi jobber med forskjellige typer programvare, alt fra Photoshop til PowerPoint. Hvis vi klarer det så er målet at vi kan lage noen kurs som vi kan holde for resten av huset. Det er likvel lov å prøve seg frem på et lavt nivå, uten krav om å produsere noe.'
                },

                {
                    id:'24',
                    image: require('./assets/sosialemedier.jpg'),
                    header:'Sosiale medier',
                    info:'Media skal fronte Fontenehuset utad gjennom sosiale medier. På fredager setter vi oss ned og planlegger sosiale medier for uken som kommer, hvilke ting på huset skal vi dekke?'
                },

                {
                    id:'25',
                    image: require('./assets/nyavdeling.jpg'),
                    header:'Ny avdeling',
                    info:'Media skal flytte etasje fra 3. til 2. etasje. Vi trenger derfor å tenke ut hvordan vi ønsker at avdelingen skal bli og lage en plan for det'
                }
            
            
            ]

            
               

    },
        
    
    {       

            id: '04',
            img: require('./assets/Kjøkken3.png'),
            title: "Kjøkken",
            carouselle:[
                {
                    id:'26',
                    image: require('./assets/mat.jpg'),
                    header:'Lage lunsj',
                    info:'Hver dag lages det lunsj til husets medlemmer.'
                },

                {
                    id:'27',
                    header:'Vaske bord',
                    info:''
                },

                {
                    id:'29',
                    header:'Dekke bord',
                    info:''
                }


            
            
            ]
    }


  

  


]

export const ModalData =[
    

       {
           id: 204,
           image: require('./assets/Frokost.jpg'),
           text: 'Vi er her hvis du trenger oss'
        
        
        },

        {
            id: 205,
            image: require('./assets/Benk.jpg'),
            text: 'Her er du alltid velkommen'
         
         
         },

        {
            
            id: 206,
            image: require('./assets/BB.png'),
            text: 'Du er god nok for oss'

        }, 

        {
            
            id: 207,
            image: require('./assets/JB.png'),
            text: 'Vi liker deg'
        }

]

export const MemeData =[

    {
        id: 230,
        image: require('./assets/memeErna.jpg')
        
         },

       {
           id: 231,
           image: require('./assets/bergenMeme2.jpg')
           
       },

       {
           id: 232,
           image: require('./assets/leavingWorkMeme.jpg')
           
           },

    
           {
            id: 233,
            image: require('./assets/workMeme.jpg')
            
            },

            {
                id: 234,
                image: require('./assets/spider.jpg')
                
                },

            {
                    id: 235,
                    image: require('./assets/workMeme2.jpg')
                    
                    },
            
            {
                        id: 236,
                        image: require('./assets/catMeme.jpg')
                        
                        },

            {
                        id: 237,
                        image: require('./assets/passord.jpg')
                            
                        },
            
            {
                        id: 238,
                        image: require('./assets/fluff.jpg')
                                
                        },
            
            {
                        id: 239,
                        image: require('./assets/calm.png')
                                    
                        },
            
            {
                        id: 240,
                            image: require('./assets/airplane.jpg')
                            
                            }
            


]



console.log(sectionData.Meeting)


  
  