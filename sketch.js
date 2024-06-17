let data = {
  wasteGeneration: 292.4,
  recycled: 69,
  composted: 25,
  alternativeFoodManagement: 17.7,
  wasted: 146,
  wasteComponents: [
    { label: "Paper and Paperboard", value: 23.05 },
    { label: "Food", value: 21.59 },
    { label: "Plastic", value: 12.2 },
    { label: "Yard Trimmings", value: 12.11 },
    { label: "Metals", value: 8.76 },
    { label: "Other", value: 22.29 },
  ],
  recyclingRates: [
    { label: "Paper and Paperboard", value: 66.54 },
    { label: "Metals", value: 12.62 },
    { label: "Rubber, Leather, and Textiles", value: 6.05 },
    { label: "Plastics", value: 4.47 },
    { label: "Glass", value: 4.43 },
  ],
  compostingRates: [
    { label: "Yard Trimmings", value: 52.35 },
    { label: "Food - Other Management", value: 41.57 },
    { label: "Food - Composting", value: 6.08 },
  ]
};

let showPieChart = 'generation';

function setup() {
  createCanvas(800, 1400);
  createButtons();
  background(220); // Set background color to gray initially
}

function draw() {
  fill(0);
  textSize(24);
  textAlign(CENTER, CENTER);
  text("Municipal Solid Waste Infographic", width / 2, 30);

  // Display info text at the bottom based on selected chart
  textAlign(CENTER, BOTTOM);
  textSize(14);
  if (showPieChart === 'generation') {
    text("In 2018, the total municipal solid waste (MSW) was 292.4 million tons. Or 5 pounds per person every single day.\n\nThe majority of waste ends up in landfills. Methane released due to \nthe decomposition of waste is a potent greenhouse gas contributing to global climate change. ", width / 2, height - 400);
    WasteGeneration();
  } else if (showPieChart === 'components') {
    text(`Recycled: 69 million tons\nComposted: 25 million tons\nAlternative Food Management: 17.7 million tons\nBiomass: 11.8%\nLandfill Waste: 146 million tons\n\n *Biomass: Waste-to-energy plants burn MSW to produce steam, which is used to power an electric generator turbine.\nFor every 100lbs of MSW in the United States, about 85lbs can be burned as fuel to generate electricity.\n\nWaste Management Hierarchy\nFrom most preferred to least preferred:\n- Source Reduction & Reuse \n- Recycling & Composition\n	- Energy Recovery\n	- Treatment & Disposal`, width / 2, height - 200);
    WasteComponents();
  } else if (showPieChart === 'recycling') {
    text(" 5 Important Facts to Know About Recycling: \n\n1. Dirty plastics cannot be recycled \n2. Enough plastic bottles are discarded over a year to go around the planet 4 times\n3. More than 90% of our ocean plastics come from just 10 rivers\n4. The largest dumping site of plastics is not a landfill, it is the pacific ocean!\n5. Our recycling habits are seriously flawed", width / 2, height - 400);
    RecyclingManagement();
  } else if (showPieChart === 'composting') {
    text("What to compost?\n\nSome nitrogen rich Materials include:\n Fruit and vegetable scraps, grass clippings, coffee grounds and paper filters, and crushed eggshells.\n\nSome carbon-rich materials include:\n Dry leaves, plant stalks and twigs, shredded uncolored or brown paper and untreated wood chips.\n\nWhat not to compost?\n\nMeat, fish, bones, cheese, dairy products, cooked foods, pet waste, produce stickers, dryer lint\n\n\n\n\nSourced from the Environmental Protection Agency\nhttps://www.epa.gov/recycle/composting-home", width / 2, height - 300);
    CompostingManagement();
  }
}

function createButtons() {
  let btnGeneration = createButton('Waste Generation');
  btnGeneration.position(10, 60);
  btnGeneration.mousePressed(() => {
    showPieChart = 'generation';
    clear(); // Clear canvas when switching to a new chart
    background(220); 
  });
  
  let btnComponents = createButton('Top Waste Components');
  btnComponents.position(150, 60);
  btnComponents.mousePressed(() => {
    showPieChart = 'components';
    clear(); // Clear canvas when switching to a new chart
    background(201, 169, 166); 
  });

  let btnRecycling = createButton('Recycling Rates');
  btnRecycling.position(320, 60);
  btnRecycling.mousePressed(() => {
    showPieChart = 'recycling';
    clear(); // Clear canvas when switching to a new chart
    background( 218, 247, 166); 
  });

  let btnComposting = createButton('Composting Rates');
  btnComposting.position(450, 60);
  btnComposting.mousePressed(() => {
    showPieChart = 'composting';
    clear(); // Clear canvas when switching to a new chart
    background(204, 204, 255);
  });
}

function WasteGeneration() {
  let total = data.wasteGeneration;
  let values = [data.recycled, data.composted, data.alternativeFoodManagement, data.wasted];
  let angles = values.map(x => x / total * TWO_PI);
  let labels = ["Recycled", "Composted", "Alternative Food Management", "Wasted"];
  let colors = ["#4CAF50", "#8BC34A", "#CDDC39", "#FFC107"];
  
  PieChart(angles, values, labels, colors, "Waste Generation in 2018 (292.4 Million Tons)");
}

function WasteComponents() {
  let total = 100;
  let values = data.wasteComponents.map(x => x.value);
  let angles = values.map(x => x / total * TWO_PI);
  let labels = data.wasteComponents.map(x => x.label);
  let colors = ["#4CAF50", "#8BC34A", "#CDDC39", "#FFC107", "#FF9800", "#FF5722"];
  
  PieChart(angles, values, labels, colors, "Top 5 Contributors of MSW in 2018");
}

function RecyclingManagement() {
  let total = 100;
  let values = data.recyclingRates.map(x => x.value);
  let angles = values.map(x => x / total * TWO_PI);
  let labels = data.recyclingRates.map(x => x.label);
  let colors = ["#4CAF50", "#8BC34A", "#CDDC39", "#FFC107", "#FF9800"];
  
  PieChart(angles, values, labels, colors, "Total MSW Recycling in 2018");
}

function CompostingManagement() {
  let total = 100;
  let values = data.compostingRates.map(x => x.value);
  let angles = values.map(x => x / total * TWO_PI);
  let labels = data.compostingRates.map(x => x.label);
  let colors = ["#4CAF50", "#8BC34A", "#CDDC39"];
  
  PieChart(angles, values, labels, colors, "Total MSW Composting and Other Food Management in 2018");
}

function PieChart(angles, values, labels, colors, title) {
  let lastAngle = 0;
  let diameter = 400;
  let centerY = 450; // Move the pie chart down
  
  textAlign(CENTER, CENTER);
  textSize(18);
  text(title, width / 2, 120); // Adjust the title position
  
  for (let i = 0; i < angles.length; i++) {
    fill(colors[i]);
    arc(width / 2, centerY, diameter, diameter, lastAngle, lastAngle + angles[i]);
    let midAngle = lastAngle + angles[i] / 2;
    let labelX = width / 2 + cos(midAngle) * (diameter / 2 + 20);
    let labelY = centerY + sin(midAngle) * (diameter / 2 + 20);
    
    // Display label and percentage
    fill(0);
    textSize(14);
    textAlign(CENTER, CENTER);
    let percent = nf((values[i] / 100) * 100, 1, 2);
    text(`${labels[i]}: ${percent}%`, labelX, labelY);
    
    lastAngle += angles[i];
  }
  
  // Legend
  lastAngle = 0;
  let legendX = 100;
  let legendY = centerY + diameter / 2 + 50; // Adjust the legend position
  textAlign(LEFT, CENTER);
  for (let i = 0; i < labels.length; i++) {
    fill(colors[i]);
    rect(legendX, legendY, 20, 20);
    fill(0);
    text(labels[i], legendX + 30, legendY + 10);
    legendY += 30;
  }
}
