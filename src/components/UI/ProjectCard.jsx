import React from 'react'
import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`
const Card = styled.div`
    width: 330px;
    height: 490px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
    &:hover ${Button} {
        display: block;
    }
`

const Image = styled.img`
    width: 100%;
    height: 110%;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

// const Tag = styled.span`
//     font-size: 12px;
//     font-weight: 400;
//     color: ${({ theme }) => theme.primary};
//     background-color: ${({ theme }) => theme.primary + 15};
//     padding: 2px 8px;
//     border-radius: 10px;
// `
const Tag = styled.span`
    width: 67px;
    height: 28px; 
    background-color: rgba(45, 212, 191, 0.1); 
    font-size: 12px;
    border-radius: 9999px;
    display: flex; 
    justify-content: center;
    align-items: center; 
    color: #5EEAD4;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 500;
    color: #E2E8F0; 
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: #94A3B8;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Description = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: #94A3B8; 
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`
const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({ theme }) => theme.card};
`


const ProjectCards = ({project,setOpenModal}) => {
    return (
        <Card onClick={() => setOpenModal({state: true, project: project})}>
            <Image src={project.image} effect='blur'/> 
            <Tags>
                {project.tags?.map((tag, index) => (
                <Tag>{tag}</Tag>
                ))}
            </Tags> 
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            {/* <Members>
                {project.member?.map((member) => (
                    <Avatar src={member.img}/>
                ))}
            </Members> */}
            {/* <Button>View Project</Button> */}
        </Card>
    )
}

export default ProjectCards