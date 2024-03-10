var count, num=0;



document.write("<div class='a'>");
document.write("[a] &emsp;");
for(count = 1; count < 100; count++)
{
    if(num<100)
    {
        num = 5 + num ;
        document.write( num +", &emsp;");
    }
    // document.write( reslt +", ");
    // count++;
}
// document.write(reslt);
// while(count <= 100);
document.write("</div>");





document.write("<br><br>");





document.write("<div class='b'>");
// // count=1;
num = 103;
document.write("[b] &emsp;");
for(count = 100; count>1; count--)
{
    if(num>1)
    {
        num = num - 3;
        document.write(num + ", " );
        count--;
    }
}
// // while(count <=100);
document.write("</div>");






document.write("<br><br>");





document.write("<div class='c'>");
document.write("[c] &emsp;");
var num, count;
for(count = 1; count < 100; count++)
{
    if(num<100)
    {
        num = count*count;
        document.write( num +", &emsp;");
    }
}
document.write("</div>");





document.write("<br><br>");





document.write("<div class='d'>");
num = 1;
document.write("[d] &emsp;");
for(count = 1; count < 100; count++)
{
    if(num<1000)
    {
        num = count*count*count;
        document.write( num +", &emsp;");
    }
//     // document.write( reslt +", ");
//     // count++;
}
document.write("</div>");





document.write("<br><br>");






document.write("<div class='e'>");
document.write("[e] &emsp;");

var n1,n2,nextTerm;
n1 = -1;
n2 = 1;
c = 0;

while( c <= 100)
{
    c =  n1 + n2;
    n1 = n2;
    n2 = c;
    document.write( c+", &emsp;");
}
document.write("</div>");