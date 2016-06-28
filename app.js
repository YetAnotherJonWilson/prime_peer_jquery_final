function carObject(make, model, year, color, rating, price){
   this.make=make;
   this.model=model;
   this.year=year;
   this.color=color;
   this.rating=rating;
   this.price=price;
 }

 var carNum = 1;

$(function(){
  $("#carForm").on("submit", function(event){
    event.preventDefault();

    var make = $(this.make).val();
    var model = $(this.model).val();
    var year = $(this.year).val();
    var color = $(this.color).val();
    var rating = $(this.rating).val();
    var price = $(this.price).val();

    var newCar = new carObject(make, model, year, color, rating, price);

    $("article").append("<div><ul></ul></div>");

    // add the car number and the remove button to the last (i.e. current) div.
    $("div:last").addClass("carDisplay").prepend("<h4>car " + carNum + "</h4><button class=\"remove\">Remove</button>");
    // increment to get ready for next carNum.
    carNum++;

    // Logic for removing a carDisplay div.
    $("button").on("click", function(){
      $(this).parent().remove();
      // carNum--;
    });
    // give a colored border based on rating.
    // 3 is the default of black.
    if(newCar.rating >= 4){
      $("div:last").addClass("goodCar");
    }else if(newCar.rating <= 2 && newCar.rating > 0){
      $("div:last").addClass("badCar");
    }
    // make an unlinked list of the newCar's values.
    $("article").find("ul:last").append("<li>Make: " + newCar.make +"</li>");
    $("article").find("ul:last").append("<li>Model: " + newCar.model +"</li>");
    $("article").find("ul:last").append("<li>Year: " + newCar.year +"</li>");
    $("article").find("ul:last").append("<li>Color: " + newCar.color +"</li>");
    $("article").find("ul:last").append("<li>Rating: " + newCar.rating +"</li>");
    $("article").find("ul:last").append("<li>Price: " + newCar.price +"</li>");
  });

});
