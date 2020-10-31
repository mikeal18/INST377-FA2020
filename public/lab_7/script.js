function convertRestaurantsToCategories(restaurantList) {
  const myArray = [];
  const result = {};
  for (let i = 0; i < restaurantList.length; i +=
    myArray.push(restaurantList[i].category)
  )

  for (let i = 0; i < myArray.length; i += 1;
    if (!result[myArray[i]]) (
      result[myArray[i]] = 0; 
      )
      result[myArray[i]] +=1;
  )
  const reply = Object.keys(result).map((category)
   y: result[category],
   label: category
  )));
  console.log('reply', reply);
  return reply;
}

function makeYourOptionsObject(datapointsFromRestaurantsList) {
  // set your chart configuration here!
  CanvasJS.addColorSet('customColorSet1', 
    
  [
    '#FAC003',
    '#EC5657',
    '#1BCDD1',
    '#8FAABB',
    '#B08BEB',
  ]);
  return {
    animationEnabled: true,
    colorSet: 'customColorSet1',
    title: {
      text: 'Places to Eat Out In Future'
    },
    axisX: {
      interval: 1,
      labelFontSize: 12
    },
    axisY2: {
      interlacedColor: 'rgba(1,77,101,.2)',
      gridColor: 'rgba(1,77,101,.1)',
      title: 'Restaurant By Category',
      labelFontSize: 12,
      scaleBreaks: { customBreaks: [{
        startValue: 100,
        endValue: 500,
        color: "orange",
        type: "zigzag"
      },
      {
        startValue: 700,
        endValue: 1000,
        color: "green",
        type: "waved"
      }]} 
    },
    data: [{
      type: 'bar',
      name: 'restaurants',
      axisYType: 'secondary',
      dataPoints: datapointsFromRestaurantsList
    }]
  };
}

function runThisWithResultsFromServer(jsonFromServer) {
  console.log('jsonFromServer', jsonFromServer);
  sessionStorage.setItem('restaurantList', JSON.stringify(jsonFromServer)); // don't mess with this, we need it to provide unit testing support
  CanvasJS.addColorSet('miscAdobe',
  [
    '#FAC003',
    '#EC5657',
    '#1BCDD1',
    '#8FAABB',
    '#B08BEB',
  ]);

  const reorganizedData = convertRestaurantsToCategories(jsonFromServer);
  const options = makeYourOptionsObject(reorganizedData);
  const chart = new CanvasJS.Chart('chartContainer', options);
  chart.render();
$(window).on('resize', ()=> {
  chart.render();
});

// Leave lines 52-67 alone; do your work in the functions above
document.body.addEventListener('submit', async (e) => {
  e.preventDefault(); // this stops whatever the browser wanted to do itself.
  const form = $(e.target).serializeArray();
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
    .then((fromServer) => fromServer.json())
    .then((jsonFromServer) => runThisWithResultsFromServer(jsonFromServer))
    .catch((err) => {
      console.log(err);
    });
});