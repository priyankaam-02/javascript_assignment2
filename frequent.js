var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var x = 1;
var y = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 y++;
                if (x<y)
                {
                  x=y; 
                  item = arr1[i];
                }
        }
        y=0;
}
document.write(item+" ( " +x +" times ) ") ;
