var Color 
    function toNight(){
        if(this.value === 'night'){
            document.querySelector('body').style.backgroundColor = 'black';
            document.querySelector('body').style.color = 'white'
            this.value === 'day';
            var links = document.querySelectorAll('a');
            var i =0;
                while(i < links.length){
                    links[i].style.color='white';
                    i=i+1;}
                        
                        }
        else{
            document.querySelector('body').style.backgroundColor = 'white';
            document.querySelector('body').style.color = 'black'
            this.value === 'night';
            var links = document.querySelectorAll('a');
            var i =0;
                while(i < links.length){
                    links[i].style.color='black';
                    i=i+1;}
                            
                        }
    }
