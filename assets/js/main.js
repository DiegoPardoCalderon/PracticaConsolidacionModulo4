const url = "https://swapi.dev/api/people";

const consultarAPI = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        resolve(data);
      });
  });
};

function* generador1() {
  yield consultarAPI(`${url}/1?format=json`).then((resp) =>
    $("#timeline-container-rojo").append(`
      <div class="col-12 col-sm-6 col-lg-4 pb-3">    
        <div class="single-timeline-content">   
          <div class="row g-0">
            <div class="timeline-icon col-md-2"></div>
              <div class="col-md-10">
                <h5 class="card-img-top">${resp.name}</h5>                      
                  <span class="fw-bold">Estatura: </span> ${resp.height}cm.
                  <span class="fw-bold">Peso: </span> ${resp.mass}kg.     
              </div>                                    
          </div>          
        </div>       
      </div>
              
    `));

  yield consultarAPI(`${url}/2?format=json`).then((resp) =>
    $("#timeline-container-rojo").append(`
      <div class="col-12 col-sm-6 col-lg-4 pb-3">    
        <div class="single-timeline-content">   
          <div class="row g-0">
            <div class="timeline-icon col-md-2"></div>
              <div class="col-md-10">
                <h5 class="card-img-top">${resp.name}</h5>                      
                  <span class="fw-bold">Estatura: </span> ${resp.height}cm.
                  <span class="fw-bold">Peso: </span> ${resp.mass}kg.     
              </div>                                    
          </div>          
        </div>       
      </div>

    `));

  yield consultarAPI(`${url}/3?format=json`).then((resp) =>
    $("#timeline-container-rojo").append(`
      <div class="col-12 col-sm-6 col-lg-4 pb-3">    
        <div class="single-timeline-content">   
          <div class="row g-0">
            <div class="timeline-icon col-md-2"></div>
              <div class="col-md-10">
                <h5 class="card-img-top">${resp.name}</h5>                      
                  <span class="fw-bold">Estatura: </span> ${resp.height}cm.
                  <span class="fw-bold">Peso: </span> ${resp.mass}kg.     
              </div>                                    
          </div>          
        </div>       
      </div>
    
    `));

  yield consultarAPI(`${url}/4?format=json`).then((resp) =>
    $("#timeline-container-rojo").append(`
      <div class="col-12 col-sm-6 col-lg-4 pb-3">    
        <div class="single-timeline-content">   
          <div class="row g-0">
            <div class="timeline-icon col-md-2"></div>
              <div class="col-md-10">
                <h5 class="card-img-top">${resp.name}</h5>                      
                  <span class="fw-bold">Estatura: </span> ${resp.height}cm.
                  <span class="fw-bold">Peso: </span> ${resp.mass}kg.     
              </div>                                    
          </div>          
        </div>       
      </div>

    `));

  yield consultarAPI(`${url}/5?format=json`).then((resp) =>
    $("#timeline-container-rojo").append(`
      <div class="col-12 col-sm-6 col-lg-4 pb-3">    
        <div class="single-timeline-content">   
          <div class="row g-0">
            <div class="timeline-icon col-md-2"></div>
              <div class="col-md-10">
                <h5 class="card-img-top">${resp.name}</h5>                      
                  <span class="fw-bold">Estatura: </span> ${resp.height}cm.
                  <span class="fw-bold">Peso: </span> ${resp.mass}kg.     
              </div>                                    
          </div>          
        </div>       
      </div>
              
    `));

}

function* generador2() {
  yield consultarAPI(`${url}/6?format=json`).then((resp) =>
    $("#timeline-container-verde").append(`
      <div class="col-12 col-sm-6 col-lg-4 pb-3">    
        <div class="single-timeline-content">   
          <div class="row g-0">
            <div class="timeline-icon col-md-2"></div>
              <div class="col-md-10">
                <h5 class="card-img-top">${resp.name}</h5>                      
                  <span class="fw-bold">Estatura: </span> ${resp.height}cm.
                  <span class="fw-bold">Peso: </span> ${resp.mass}kg.     
              </div>                                    
          </div>          
        </div>       
      </div>

    `));   


  yield consultarAPI(`${url}/7?format=json`).then((resp) =>
    $("#timeline-container-verde").append(`
      <div class="col-12 col-sm-6 col-lg-4 pb-3">    
        <div class="single-timeline-content">   
          <div class="row g-0">
            <div class="timeline-icon col-md-2"></div>
              <div class="col-md-10">
                <h5 class="card-img-top">${resp.name}</h5>                      
                  <span class="fw-bold">Estatura: </span> ${resp.height}cm.
                  <span class="fw-bold">Peso: </span> ${resp.mass}kg.     
              </div>                                    
          </div>          
        </div>       
      </div>

    `));

  yield consultarAPI(`${url}/8?format=json`).then((resp) =>
    $("#timeline-container-verde").append(`
      <div class="col-12 col-sm-6 col-lg-4 pb-3">    
        <div class="single-timeline-content">   
          <div class="row g-0">
            <div class="timeline-icon col-md-2"></div>
              <div class="col-md-10">
                <h5 class="card-img-top">${resp.name}</h5>                      
                  <span class="fw-bold">Estatura: </span> ${resp.height}cm.
                  <span class="fw-bold">Peso: </span> ${resp.mass}kg.     
              </div>                                    
          </div>          
        </div>       
      </div>

    `));

  yield consultarAPI(`${url}/9?format=json`).then((resp) =>
    $("#timeline-container-verde").append(`
      <div class="col-12 col-sm-6 col-lg-4 pb-3">    
        <div class="single-timeline-content">   
          <div class="row g-0">
            <div class="timeline-icon col-md-2"></div>
              <div class="col-md-10">
                <h5 class="card-img-top">${resp.name}</h5>                      
                  <span class="fw-bold">Estatura: </span> ${resp.height}cm.
                  <span class="fw-bold">Peso: </span> ${resp.mass}kg.     
              </div>                                    
          </div>          
        </div>       
      </div>

    `));

  yield consultarAPI(`${url}/10?format=json`).then((resp) =>
    $("#timeline-container-verde").append(`
      <div class="col-12 col-sm-6 col-lg-4 pb-3">    
        <div class="single-timeline-content">   
          <div class="row g-0">
            <div class="timeline-icon col-md-2"></div>
              <div class="col-md-10">
                <h5 class="card-img-top">${resp.name}</h5>                      
                  <span class="fw-bold">Estatura: </span> ${resp.height}cm.
                  <span class="fw-bold">Peso: </span> ${resp.mass}kg.     
              </div>                                    
          </div>          
        </div>       
      </div>
    
    `));

}

function* generador3() {
  yield consultarAPI(`${url}/11?format=json`).then((resp) =>
  $("#timeline-container-azul").append(`
    <div class="col-12 col-sm-6 col-lg-4 pb-3">    
      <div class="single-timeline-content">   
        <div class="row g-0">
          <div class="timeline-icon col-md-2"></div>
            <div class="col-md-10">
              <h5 class="card-img-top">${resp.name}</h5>                      
                <span class="fw-bold">Estatura: </span> ${resp.height}cm.
                <span class="fw-bold">Peso: </span> ${resp.mass}kg.     
            </div>                                    
        </div>          
      </div>       
    </div>
          
  `));

  yield consultarAPI(`${url}/12?format=json`).then((resp) =>
  $("#timeline-container-azul").append(`
    <div class="col-12 col-sm-6 col-lg-4 pb-3">    
      <div class="single-timeline-content">
        <div class="row g-0">            
          <div class="timeline-icon col-md-2"></div>
            <div class="col-md-10">
              <h5 class="card-img-top">${resp.name}</h5>
                <span class="fw-bold">Estatura: </span> ${resp.height}cm.
                <span class="fw-bold">Peso: </span> ${resp.mass}kg.
            </div>
        </div>           
      </div>
    </div   

  `));

  yield consultarAPI(`${url}/13?format=json`).then((resp) =>
  $("#timeline-container-azul").append(`
    <div class="col-12 col-sm-6 col-lg-4 pb-3">    
      <div class="single-timeline-content">   
        <div class="row g-0">
          <div class="timeline-icon col-md-2"></div>
            <div class="col-md-10">
              <h5 class="card-img-top">${resp.name}</h5>                      
                <span class="fw-bold">Estatura: </span> ${resp.height}cm.
                <span class="fw-bold">Peso: </span> ${resp.mass}kg.     
            </div>                                    
        </div>          
      </div>       
    </div>
  
  `));

  yield consultarAPI(`${url}/14?format=json`).then((resp) =>
  $("#timeline-container-azul").append(`
    <div class="col-12 col-sm-6 col-lg-4 pb-3">    
      <div class="single-timeline-content">   
        <div class="row g-0">
          <div class="timeline-icon col-md-2"></div>
            <div class="col-md-10">
              <h5 class="card-img-top">${resp.name}</h5>                      
                <span class="fw-bold">Estatura: </span> ${resp.height}cm.
                <span class="fw-bold">Peso: </span> ${resp.mass}kg.     
            </div>                                    
        </div>          
      </div>       
    </div>

  `));

  yield consultarAPI(`${url}/15?format=json`).then((resp) =>
  $("#timeline-container-azul").append(`
    <div class="col-12 col-sm-6 col-lg-4 pb-3">    
      <div class="single-timeline-content">   
        <div class="row g-0">
          <div class="timeline-icon col-md-2"></div>
            <div class="col-md-10">
              <h5 class="card-img-top">${resp.name}</h5>                      
                <span class="fw-bold">Estatura: </span> ${resp.height}cm.
                <span class="fw-bold">Peso: </span> ${resp.mass}kg.     
            </div>                                    
        </div>          
      </div>       
    </div>

  `));

}

const g1 = generador1();
const g2 = generador2();
const g3 = generador3();

$(document).ready(function () {
  $("#timeline-container-rojo").mouseenter(function () {
    g1.next();
  });

  $("#timeline-container-verde").mouseenter(function () {
    g2.next();
  });

  $("#timeline-container-azul").mouseenter(function () {
    g3.next();
  });
});





