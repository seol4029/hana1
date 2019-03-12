
            var Color = {
                toNight:function(){
                    document.querySelector('body').style.backgroundColor='black';
                    document.querySelector('body').style.color='white';

                    var i= 0;
                    var links = document.querySelectorAll('a');

                    while(i <links.length){
                        links[i].style.color = 'white';
                        i = i+1;            
                    }
                },
                toDay:function(){
                    document.querySelector('body').style.backgroundColor='white';
                    document.querySelector('body').style.color='black';

                    var i= 0;
                    var links = document.querySelectorAll('a');

                    while(i <links.length){
                        links[i].style.color = 'black';
                        i = i+1;
                    }
                }
            }
            
       