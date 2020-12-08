function func1(){
            let btn = document.createElement("button");
            let data = new Date();
            let hours = data.getHours();
            let minutes = data.getMinutes();
            let seconds = data.getSeconds();
            let period ="AM";
            if(hours == 0) hours = 12;
            if(hours > 12){
                hours = hours - 12;
                period="PM";
            }
            hours = hours < 10 ? `0${hours}` : hours
            minutes = minutes < 10 ? `0${minutes}` : minutes
            seconds = seconds < 10 ? `0${seconds}` : seconds
            let res = `${hours}:${minutes}:${seconds}:${period}`
            setInterval(func1,1000);
            document.getElementById("clock").innerText = res;
            
        }
        

        function func2(){
            let btn = document.createElement("button");
            let data = new Date();
            let hours = data.getHours();
            let minutes = data.getMinutes();
            let seconds = data.getSeconds();
            let period ="AM";
            if(hours == 0) hours = 12;
            if(hours > 12) period="PM";
            let res = `${hours}:${minutes}:${seconds}:${period}`
            setInterval(func2,1000);
            document.getElementById("clock").innerText = res;
        }