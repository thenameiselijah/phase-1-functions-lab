function distanceFromHqInBlocks(someValue) {
    const hqValue = 42;
    const distance = Math.abs(hqValue - someValue);
    return distance;
  }

  function distanceFromHqInFeet(someValue) {
    var distanceInBlocks = distanceFromHqInBlocks(someValue);
  
    var distanceInFeet = distanceInBlocks * 264;
  
    return distanceInFeet;
  }

  function distanceTravelledInFeet(start, destination) {
    const distance  =  Math.abs(destination - start) * 264; 
    return distance; 
  }

  function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start) * 264;
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      const fare = (distance - 400) * 0.02;
      return fare;
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else if (distance >= 2500) {
      return 'cannot travel that far';
    }
  }