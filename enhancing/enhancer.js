module.exports = {
  succeed,
  fail,
  repair,
};

function succeed(item) {
  if(item.enhancement < 20){
    return { ...item, enhancement: item.enhancement + 1 };
  } else {
    return item;
  }
  
}

function fail(item) {
  switch (true) {
    case (item.enhancement < 15):
    return { ...item, durability: item.durability -5};

    case (item.enhancement > 16):
    return {...item, enhancement: item.enhancement -1, durability: item.durability -10};
    
    case (item.enhancement >= 15):
    return {...item, durability: item.durability -10};

    default : return item;
  }
  
}

function repair(item) {
  return { ...item, durability: 100 };
}
