window.onload = function(){
    //  document.querySelector(".audioo").src = "../wave/周杰伦 - 最伟大的作品.mp3";
    //  document.querySelector(".mscname").innerHTML = "周杰伦 - 最伟大的作品";

     let mscarr = [
        "wave/周杰伦 - 最伟大的作品.mp3",
        "wave/林俊杰 - 裹着心的光.ogg",
        "wave/林俊杰 - 黑夜问白天_EG.flac",
        "wave/林俊杰 - 慢慢喜欢你.ogg",
        "wave/林俊杰 - 达尔文.ogg",
        "wave/龙智祥 _ 吴非华 - 大香蕉.ogg",
        "wave/Azis - Hop.ogg"
     ];
     let mscname1 = [
        "周杰伦 - 最伟大的作品",
        "林俊杰 - 裹着心的光",
        "林俊杰 - 黑夜问白天_EG",
        "林俊杰 - 林俊杰 - 慢慢喜欢你",
        "林俊杰 - 达尔文",
        "王艺儒的大香蕉",
        "黄斯绪的hop"
     ];
     let csh = 1;
    //  document.querySelector(".audioo").src = mscarr[csh];
    //  document.querySelector(".mscname").innerHTML = mscname1[csh];

     function fc(name){
        return document.querySelector(name);
     }
     fc(".audioo").src = mscarr[csh];
     document.querySelector(".mscname").innerHTML = mscname1[csh]
     let audio = fc(".audioo");
     fc(".播放").onclick = function(){
        if(audio.paused){
            audio.play();
        }
     }
     fc(".暂停").onclick = function(){
        if(audio.play){
            audio.pause();
        }
     }
     fc(".上一首").onclick = function(){
        csh--;
        if(csh < 0){
            csh = mscarr.length - 1;
        }
        fc(".audioo").src = mscarr[csh];
        document.querySelector(".mscname").innerHTML = mscname1[csh]
        audio.play();
     }
     fc(".下一首").onclick = function(){
        csh++;
        if(csh > mscarr.length - 1){
            csh = 0;
        }
        fc(".audioo").src = mscarr[csh];
        document.querySelector(".mscname").innerHTML = mscname1[csh]
        audio.play();
     }
}
