var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mernJwtAuth');
var Supply  = require('../models/supply');


var things = [
  {
    name: '25 adhesive bandages (assorted sizes)',
    category: 'Medical',
  },
  {
    name: '1 roller bandage (3 inches wide)',
    category: 'Medical',
  },
  {
    name: '1 roller bandage (4 inches wide)',
    category: 'Medical',
  },
  {
    name: '5 sterile gauze pads',
    category: 'Medical',
  },
  {
    name: 'Adhesive cloth tape',
    category: 'Medical',
  },
  {
    name: 'Antiseptic wipe packets',
    category: 'Medical',
  },
  {
    name: 'Advil, Tylenol or Aspirin',
    category: 'Medical',
  },
  {
    name: 'Benadryl or Claritin',
    category: 'Medical',
  },
  {
    name: 'Burn gel',
    category: 'Medical',
  },
  {
    name: 'Hydrocortisone ointment',
    category: 'Medical',
  },
  {
    name: 'Antibiotic ointment',
    category: 'Medical',
  },
  {
    name: 'Instant cold compress',
    category: 'Medical',
  },
  {
    name: 'Oral thermometer (non-mercury/nonglass)',
    category: 'Medical',
  },
  {
    name: '2 pair of nonlatex gloves',
    category: 'Medical',
  },
  {
    name: 'Tweezers',
    category: 'Medical',
  },
  {
    name: 'Scissors',
    category: 'Medical',
  },
  {
    name: 'Insect Repellant (if needed in your area)',
    category: 'Medical',
  },
  {
    name: 'Sunscreen (if needed in your area)',
    category: 'Medical',
  },
  {
    name: 'Toothpaste and toothbrush',
    category: 'Medical',
  },
  {
    name: 'Extra medications: diabetes, blood pressure, heart medication, birth control, etc...',
    category: 'Medical',
  },
  {
    name: 'Feminine supplies',
    category: 'Medical',
  },
  {
    name: 'Infant: baby wipes',
    category: 'Medical',
  },
  {
    name: 'Infant: diapers',
    category: 'Medical',
  },
  {
    name: 'Infant: rash cream',
    category: 'Medical',
  },
  {
    name: '3 gallons water per person (1 gallon per day)',
    category: 'Food and Water',
  },
  {
    name: '3 day supply of non-perishable food per person',
    category: 'Food and Water',
  },
  {
    name: 'Infant: 3 day supply of baby formula',
    category: 'Food and Water',
  },
  {
    name: 'Pets: 3 day supply of pet food',
    category: 'Food and Water',
  },
  {
    name: 'Manual can opener',
    category: 'Food and Water',
  },
  {
    name: 'Chocolate bars or comfort snacks',
    category: 'Food and Water',
  },
  {
    name: 'Water purification method 1: Household bleach & medicine dropper. 15 drops bleach to 1 gallon water.',
    category: 'Food and Water',
  },
  {
    name: 'Water purification method 2: Water purification tablets',
    category: 'Food and Water',
  },
  {
    name: 'Water purification method 3: Water purification filter system',
    category: 'Food and Water',
  },
  {
    name: 'At least $20 cash in $5, $10 bills',
    category: 'Tools and Supplies',
  },
  {
    name: 'Dust mask or N95 respirator mask',
    category: 'Tools and Supplies',
  },
  {
    name: 'Matches in a waterproof container',
    category: 'Tools and Supplies',
  },
  {
    name: 'Lightweight camp stove and fuel',
    category: 'Tools and Supplies',
  },
  {
    name: 'Work gloves',
    category: 'Tools and Supplies',
  },
  {
    name: 'Whistle - if trapped during emergency',
    category: 'Tools and Supplies',
  },
  {
    name: 'Duct Tape',
    category: 'Tools and Supplies',
  },
  {
    name: 'Plastic sheeting - to build shelter in place',
    category: 'Tools and Supplies',
  },
  {
    name: 'Shovel',
    category: 'Tools and Supplies',
  },
  {
    name: 'Empty burlap or plastic bags with ties',
    category: 'Tools and Supplies',
  },
  {
    name: 'Sand (floods, hurricanes)',
    category: 'Tools and Supplies',
  },
  {
    name: 'Utility knife',
    category: 'Tools and Supplies',
  },
  {
    name: 'Utility knife',
    category: 'Tools and Supplies',
  },
  {
    name: 'Wrench or pliiers for shutting off gas main',
    category: 'Tools and Supplies',
  },
  {
    name: 'Fire extinguisher',
    category: 'Tools and Supplies',
  },
  {
    name: 'Empty approved container for gasoline',
    category: 'Tools and Supplies',
  },
  {
    name: 'Toilet paper',
    category: 'Tools and Supplies',
  },
  {
    name: 'Garbage bags & twist ties - for makeshift toilet',
    category: 'Tools and Supplies',
  },
  {
    name: 'Emergency foil blanket',
    category: 'Tools and Supplies',
  },
  {
    name: '1 Sleeping bag per person',
    category: 'Tools and Supplies',
  },
  {
    name: '1 set per person: coat, shirt, pant, underwear, socks & sturdy shoes',
    category: 'Tools and Supplies',
  },
  {
    name: 'Extra pair of glasses or contacts',
    category: 'Tools and Supplies',
  },
  {
    name: 'Contact lens solution',
    category: 'Tools and Supplies',
  },
  {
    name: '1 battery powered or hand crank AM/FM radio',
    category: 'Tech',
  },
  {
    name: '1 pack of batteries for radio',
    category: 'Tech',
  },
  {
    name: '1 flashlight',
    category: 'Tech',
  },
  {
    name: '1 pack of batteries for flashlight',
    category: 'Tech',
  },
  {
    name: 'Cell phone charger',
    category: 'Tech',
  },
  {
    name: 'Paper map of your region',
    category: 'Tech',
  },
  {
    name: 'Pen and notepad - to take notes for insurance',
    category: 'Tech',
  },
  {
    name: 'Extra set of house keys',
    category: 'Tech',
  },
  {
    name: 'Extra set of car keys',
    category: 'Tech',
  },
  {
    name: '1 list of important phone numbers',
    category: 'Documents',
  },
  {
    name: 'Birth certificate copy',
    category: 'Documents',
  },
  {
    name: 'Passport copy',
    category: 'Documents',
  },
  {
    name: 'Rental lease or mortgage copy',
    category: 'Documents',
  },
  {
    name: 'Health insurance copy',
    category: 'Documents',
  },
  {
    name: 'Email, banking & necessary internet passwords list',
    category: 'Documents',
  },
  {
    name: 'Credit card, debit card photocopies (front and back of cards)',
    category: 'Documents',
  },
  {
    name: 'Prep your home: Bolt and brace water heaters and gas appliances to wall studs. Have a professional install flexible fittings to avoid gas or water leaks. ',
    category: 'Earthquake',
  },
  {
    name: 'Prep your home: Strap down televisions and other expensive or hazardous electrical components ',
    category: 'Earthquake',
  },
  {
    name: 'Prep your home: Anchor top-heavy, tall and freestanding furniture such as bookcases, china cabinets to wall studs to keep these from toppling over.',
    category: 'Earthquake',
  },
  {
    name: 'Prep your family: Each family member should know to Drop, Cover, and Hold On when they feel an earthquake. ',
    category: 'Earthquake',
  },
  {
    name: 'Prep  your family: Pick the best safe spot to hide. Under heavy furniture, inside a doorframe or against inside walls are ideal.',
    category: 'Earthquake',
  },
  {
    name: 'Prep your family: If you are in bed when the earthquake strikes, stay there. Hold on and protect your head with a pillow.',
    category: 'Earthquake',
  },
  {
    name: 'Credit card, debit card photocopies (front and back of cards)',
    category: 'Earthquake',
  },
];

things.forEach(function(thing) {
  console.log("Trying to add a thing...")
  console.log(thing.name)
  console.log(thing.category)
  Supply.create(
    {
      name: thing.name,
      category: thing.category
    }, function(err, supply) {
      console.log("Here are the results")
      console.log(err)
      console.log(supply)
      if (err) {
        console.log('error!', err);
      } else {
        console.log('done');
      }
    }
  )
});

// process.exit();
