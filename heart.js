let heart_width = parseInt(prompt('Nhap do rong cua trai tim'));
let i,j,z,x;
let print_out_top='';
let print_out_bottom ='';

for (i = 1; i <= Math.floor(heart_width / 2); i++) {
        for (j = 1; j <= i; j++) {
        print_out_top = print_out_top + '***';
    }
    print_out_top=print_out_top+'<br>';
}
document.getElementById("heart_left_above").innerHTML = print_out_top;
document.getElementById('heart_right_above').innerHTML= print_out_top;
//
for (x=heart_width; x >=1; x--) {
    for (z = 1; z <= x; z++) {
        print_out_bottom = print_out_bottom + '***';
    }
    print_out_bottom=print_out_bottom+'<br>';
}
document.getElementById('under').innerHTML=print_out_bottom;