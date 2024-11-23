import styled from 'styled-components'



export const Container = styled.div`




.slider {
    -webkit-appearance: none;
    background: black;
    border: 1px solid black;
    min-width: 200px;
    max-width: 200px;
    width: 100%;
    position: relative;
    top: -15px;
    left: 20px;
    height: 1px;
}


.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 30px;
    background: rgba(0,0,0,1);
    background: -moz-linear-gradient(left, rgba(0,0,0,1) 0%, rgba(51,51,51,1) 43%, rgba(77,77,77,1) 53%, rgba(51,51,51,1) 68%, rgba(0,0,0,1) 100%);
    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(0,0,0,1)), color-stop(43%, rgba(51,51,51,1)), color-stop(53%, rgba(77,77,77,1)), color-stop(68%, rgba(51,51,51,1)), color-stop(100%, rgba(0,0,0,1)));
    background: -webkit-linear-gradient(left, rgba(0,0,0,1) 0%, rgba(51,51,51,1) 43%, rgba(77,77,77,1) 53%, rgba(51,51,51,1) 68%, rgba(0,0,0,1) 100%);
    background: -o-linear-gradient(left, rgba(0,0,0,1) 0%, rgba(51,51,51,1) 43%, rgba(77,77,77,1) 53%, rgba(51,51,51,1) 68%, rgba(0,0,0,1) 100%);
    background: -ms-linear-gradient(left, rgba(0,0,0,1) 0%, rgba(51,51,51,1) 43%, rgba(77,77,77,1) 53%, rgba(51,51,51,1) 68%, rgba(0,0,0,1) 100%);
    background: linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(51,51,51,1) 43%, rgba(77,77,77,1) 53%, rgba(51,51,51,1) 68%, rgba(0,0,0,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000', GradientType=1 );
    cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #04AA6D;
  cursor: pointer;
}



`