const illo = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-canvas-1',
  });
  
  // add circle
  new Zdog.Ellipse({
    addTo: illo,
    diameter: 220,
    stroke: 3,
    color: '#f53',
    rotate: { x: Zdog.TAU/8 },
  });

var x = 0
function animate() {
// rotate illo each frame
// illo.rotate.y += 0.01;
illo.rotate.y += (x++/100000),

illo.updateRenderGraph();
// animate next frame
requestAnimationFrame( animate );
}
// start animation
animate();

const illo2 = new Zdog.Illustration({
// set canvas with selector
element: '.zdog-canvas-2',
});

// add circle
new Zdog.Ellipse({
addTo: illo2,
diameter: 110,
stroke: 2,
color: '#f53',
rotate: { x: Zdog.TAU/8 },
});
  
  
function animate2() {
// rotate illo each frame
illo2.rotate.y += 0.011;
illo2.updateRenderGraph();
// animate next frame
requestAnimationFrame( animate2 );
}
// start animation
animate2();

const illo3 = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-canvas-3',
    });
    
    // add circle
    new Zdog.Ellipse({
    addTo: illo3,
    diameter: 55,
    stroke: 2,
    color: '#f53',
    rotate: { x: Zdog.TAU/8 },
    
    
    });
      
      
    function animate3() {
    // rotate illo each frame
    illo3.rotate.y += 0.012;
    illo3.updateRenderGraph();
    // animate next frame
    requestAnimationFrame( animate3 );
    }
    // start animation
    animate3();

    const illo4 = new Zdog.Illustration({
      // set canvas with selector
      element: '.zdog-canvas-4',
      });
      
      // add circle
      new Zdog.Ellipse({
      addTo: illo4,
      diameter: 75,
      stroke: 2,
      color: '#f53',
      rotate: { x: Zdog.TAU/8 },
      
      
      });
        
        
      function animate4() {
      // rotate illo each frame
      illo4.rotate.y += 0.014;
      illo4.updateRenderGraph();
      // animate next frame
      requestAnimationFrame( animate4 );
      }
      // start animation
      animate4();

      const illo5= new Zdog.Illustration({
        // set canvas with selector
        element: '.zdog-canvas-5',
        });
        
        // add circle
        new Zdog.Ellipse({
        addTo: illo5,
        diameter: 130,
        stroke: 2,
        color: '#f53',
        rotate: { x: Zdog.TAU/8 },
        
        
        });
          
          
        function animate5() {
        // rotate illo each frame
        illo5.rotate.y += 0.015;
        illo5.updateRenderGraph();
        // animate next frame
        requestAnimationFrame( animate5 );
        }
        // start animation
        animate5();