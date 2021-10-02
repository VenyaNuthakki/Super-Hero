var canvas = new fabric.Canvas("myCanvas");
player_x = 10;
player_y = 10;
block_image_width = 30;
block_image_height = 30;
var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (img) {
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(getimage) {
    fabric.Image.fromURL(getimage, function (img) {
        block_image_object = img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}
//player_update();
//new_image("cloud.jpg");
window.addEventListener("keydown", my_Keydown);

function my_Keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (e.shiftKey == true && keypressed == '80') {
        console.log("Shift and P pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey == true && keypressed == '77') {
        console.log("Shift and M pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (keypressed == '37') {
        left();
        console.log("Left key is pressed");
    }
    if (keypressed == '38') {
        up();
        console.log("Up key is pressed");
    }
    if (keypressed == '39') {
        right();
        console.log("Right key is pressed");
    }
    if (keypressed == '40') {
        down();
        console.log("Down key is pressed");
    }
    if (keypressed == '65') {
        new_image("ironman_body.png");
        console.log("A is pressed");
    }
    if (keypressed == '66') {
        new_image("ironman_face.png");
        console.log("B is pressed");
    }
    if (keypressed == '67') {
        new_image("ironman_left_hand.png");
        console.log("C is pressed");
    }
    if (keypressed == '68') {
        new_image("ironman_right_hand.png");
        console.log("D is pressed");
    }
    if (keypressed == '69') {
        new_image("ironman_legs.png");
        console.log("E is pressed");
    }

    if (keypressed == '70') {
        new_image("hulkd_body.png");
        console.log("F is pressed");
    }
    if (keypressed == '71') {
        new_image("hulk_face.png");
        console.log("G is pressed");
    }
    if (keypressed == '72') {
        new_image("hulk_left_hand.png");
        console.log("H is pressed");
    }
    if (keypressed == '73') {
        new_image("hulk_right_hand.png");
        console.log("I is pressed");
    }
    if (keypressed == '74') {
        new_image("hulk_legs.png");
        console.log("J is pressed");
    }

    if (keypressed == '75') {
        new_image("spiderman_body.png");
        console.log("K is pressed");
    }
    if (keypressed == '76') {
        new_image("spiderman_face.png");
        console.log("L is pressed");
    }
    if (keypressed == '77') {
        new_image("spiderman_left_hand.png");
        console.log("M is pressed");
    }
    if (keypressed == '78') {
        new_image("spiderman_right_hand.png");
        console.log("N is pressed");
    }
    if (keypressed == '79') {
        new_image("spiderman_legs.png");
        console.log("O is pressed");
    }

}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_image_height;
        console.log("x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y <= 500) {
        player_y = player_y + block_image_height;
        console.log("x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x >= 0) {
        player_x = player_x - block_image_width;
        console.log("x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x <= 900) {
        player_x = player_x + block_image_width;
        console.log("x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}