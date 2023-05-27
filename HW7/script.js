// ДЗ 1

    class Cars {
        constructor(model, color, wheels) {
          this.model = model;
          this.color = color;
          this.wheels = wheels;
        }
      
        start() {
          console.log('Машина заведена');
        }
      }
      
      class Sedan extends Cars {
        constructor(model, color, wheels, trunkSize) {
          super(model, color, wheels);
          this.trunkSize = trunkSize;
        }
      
        openTrunk() {
          console.log('Открываю багажник');
        }
      }
      
      class SUV extends Cars {
        constructor(model, color, wheels, offRoadCapabilities) {
          super(model, color, wheels);
          this.offRoadCapabilities = offRoadCapabilities;
        }
      
        engage4WD() {
          console.log('Включаю полный привод');
        }
      }
      
      class SportsCar extends Cars {
        constructor(model, color, wheels, topSpeed) {
          super(model, color, wheels);
          this.topSpeed = topSpeed;
        }
      
        driveFast() {
          console.log('Набираю максимальную скорость');
        }
      }
      
      const sedan = new Sedan('Toyota Camry', 'Серебристый', 4, '500 л');
      const suv = new SUV('Jeep Wrangler', 'Красный', 4, 'Внедорожный');
      const sportsCar = new SportsCar('Ferrari 488', 'Желтый', 4, '350 км/ч');
    
      sedan.start(); 
      sedan.openTrunk(); 
      
      suv.start(); 
      suv.engage4WD(); 
      
      sportsCar.start(); 
      sportsCar.driveFast(); 
      

//ДЗ 2 if-else

// class TrafficLight {
//     constructor() {
//       this.lights = document.getElementsByClassName('light');
//     }
  
//     update(color) {
//       Array.from(this.lights).forEach(light => {
//         light.classList.remove('red', 'yellow', 'green');
//       });
  
//       if (color === 'Красный') {
//         this.lights[0].classList.add('red');
//         alert('STOP');
//       } else if (color === 'Зеленый') {
//         this.lights[2].classList.add('green');
//         alert('GO');
//       }
//     }
  
//     handleClick() {
//       const inputValue = prompt('Введите цвет светофора: "Красный" или "Зеленый"');
//       if (inputValue !== null) {
//         this.update(inputValue);
//       }
//     }
  
//     init() {
//       window.addEventListener('DOMContentLoaded', () => {
//         this.handleClick();
//       });
//     }
//   }
  
//   const trafficLight = new TrafficLight();
//   trafficLight.init();

  //ДЗ2 switch case

  class TrafficLight {
    constructor() {
      this.lights = document.getElementsByClassName('light');
    }
  
    update(color) {
      Array.from(this.lights).forEach(light => {
        light.classList.remove('red', 'yellow', 'green');
      });
  
      switch (color) {
        case 'Красный':
          this.lights[0].classList.add('red');
          alert('STOP');
          break;
        case 'Зеленый':
          this.lights[2].classList.add('green');
          alert('GO');
          break;
        default:
          alert('Некорректный цвет');
      }
    }
  
    handleClick() {
      const inputValue = prompt('Введите цвет светофора: "Красный" или "Зеленый"');
      if (inputValue !== null) {
        this.update(inputValue);
      }
    }
  
    init() {
      window.addEventListener('DOMContentLoaded', () => {
        this.handleClick();
      });
    }
  }
  
  const trafficLight = new TrafficLight();
  trafficLight.init();
  