import styled from 'styled-components';
import React, {useState,useCallback, useMemo} from 'react'

type Props={
    color? : string
}

const Imgs = ({color}:Props)=>{

    const [currentImg,setCurrentImg] = useState('img1')

    const changeCurrentTaget = (e:any)=>{
        const id = e.target.id;
        setCurrentImg(id);
    }

    const isCurrentTarget = (className:string)=>{
        return currentImg===className;
    }

    return(
        <div>
            <ImgsContainer>
                <H2Tag color={color}>
                    <span>CodingWorks </span>
                    Online Class Open
                </H2Tag>
                <div className="imgs">
                    <img onClick={changeCurrentTaget} src="/imgs/이미지1.png" id="img1" className={isCurrentTarget("img1")?"img active":"img"} alt="imgs" />
                    <img onClick={changeCurrentTaget} src="/imgs/이미지2.png" id="img2" className={isCurrentTarget("img2")?"img active":"img"} alt="imgs" />
                    <img onClick={changeCurrentTaget} src="/imgs/이미지3.png" id="img3" className={isCurrentTarget("img3")?"img active":"img"} alt="imgs" />
                </div>
                <div className={isCurrentTarget("img1")?"profile active":"profile"} data-taget="img1">
                    <TextTga>
                        Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Ipsum, nesciunt porro, voluptate sunt 
                        eius autem beatae quibusdam commodi odio dolorem veniam
                        delectus eos! Tempora voluptatem dolorem velit quos, 
                        animi maxime?
                        Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Ipsum, nesciunt porro, voluptate sunt 
                        eius autem beatae quibusdam commodi odio dolorem veniam
                        delectus eos! Tempora voluptatem dolorem velit quos, 
                        animi maxime?
                       
                    </TextTga>
                    <H2Tag color={color}>Dev Winter</H2Tag>
                </div>
                <div className={isCurrentTarget("img2")?"profile active":"profile"} >
                    <TextTga>
                        Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Ipsum, nesciunt porro, voluptate sunt 
                        eius autem beatae quibusdam commodi odio dolorem veniam
                        delectus eos! Tempora voluptatem dolorem velit quos, 
                        ani
                        Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Ipsum, nesciunt porro, voluptate sunt 
                        eius autem beatae quibusdam commodi odio dolorem veniam
                        delectus eos! Tempora voluptatem dolor
                        Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Ipsum, nesciunt porro, voluptate sunt 
                        eius autem beatae quibusdam commodi odio dolorem veniam
                        delectus eos! Tempora voluptatem dolorem velit quos, 
                        animi maxime?
                        
                    </TextTga>
                    <H2Tag color={color}>Dev Airi</H2Tag>
                </div>
                <div className={isCurrentTarget("img3")?"profile active":"profile"} >
                    <TextTga>
                        Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Ipsum, nesciunt porro, voluptate sunt 
                        eius autem beatae quibusdam commodi odio dolorem veniam
                        delectus eos! Tempora voluptatem dolorem velit quos, 
                        animi maxime?
                        Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Ipsum, nesciunt porro, voluptate sunt 
                        eius autem beatae quibusdam commodi odio dolorem veniam
                        delectus eos! Tempora voluptatem dolorem velit quos, 
                        animi maxime?
                        Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Ipsum, nesciunt porro, voluptate sunt 
                        eius autem beatae quibusdam commodi odio dolorem veniam
                        delectus eos! Tempora voluptatem dolorem velit quos, 
                        animi maxime?
                    </TextTga>
                    <H2Tag color={color}>Dev Yua</H2Tag>
                </div>
            </ImgsContainer>
        </div>
    )
}


const ImgsContainer = styled.div`
    box-sizing: border-box;
    width: 850px;
    height: 450px;
    border: 1px solid black;
    box-shadow: 0 0 5px black;
    background-color: white;

    & .imgs{
        text-align: center;
        margin-top: 10px;

        & img{
            width: 100px;
            height: 100px;

            &.img{
                filter: grayscale(1);
            }
            &.img.active{
                filter: grayscale(0);
            }
        }
    }

    & .profile {
        display: none;
    }

    & .profile.active{
        display: block;
    }
`

const H2Tag = styled.h2`
text-align: center;
& span{
    color: ${props=>props.color || 'red'};
}
`

const TextTga = styled.p`

    text-align: center;
    padding: 20px;
    text-overflow: ellipsis;
    overflow: hidden;


`

export default Imgs;