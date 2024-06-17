let boxes=document.querySelectorAll(".box")
let p_name=document.querySelector(".turn")
let player_x=true;

let win_pos=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]]
function check_X_O(pl_id){
    let sym="X";
    if(pl_id){
        sym="O";
    }
    let check;
    for (let i = 0; i < win_pos.length; i++) {
        check=true;
        for (let j = 0; j < win_pos[i].length; j++) {
            if(boxes[win_pos[i][j]].innerText!=sym){
                 check=false;
                 break;
            }
        }
        if(check==true){
            return sym;
        }
    }
    return ;
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(player_x){
            box.innerHTML="<div>X</div>";
            p_name.innerText="Player-O turn";
            player_x=false;
        }
        else{
            p_name.innerText="Player-X turn";
            box.innerHTML="<div>O</div>";
            player_x=true;
        }
        box.disabled = true;
        let name=check_X_O(player_x);
        if(name=="X"||name=="O"){
        alert("player "+name+" won");
        reset_board();
        }

    });
});

function reset_board(){
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerHTML="";
    });
    p_name.innerText="Player-X turn";
    player_x=true;
}

document.querySelector("#reset").addEventListener("click",reset_board);




