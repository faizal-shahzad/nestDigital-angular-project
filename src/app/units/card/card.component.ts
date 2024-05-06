import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  department=[
    {
      id:1,
      title:"Aerospace & Defence",
      image:"../../../assets/nest4.jpg",
      link:"mobility",
      description:"NeST Digital partners with prime Global Aerospace OEMs bringing unmatched value to its customers and contributing to evolving modernization of aviation technologies.",
    },
    {
      id:2,
      title:"Mobility",
      image:"../../../assets/nest6.jpg",
      link:"mobility",
      description:"Providing better solutions for overcoming the challenges of the technology curve, competition and increasing customer expectations.",
    },
    {
      id:3,
      title:"Industrial",
      image:"../../../assets/nest7.png",
      link:"mobility",
      description:"Our three decades of presence in the Manufacturing & Energy segment and the acquired domain knowledge form the foundation of our offerings to our world-leading customers.",
    },
    {
      id:4,
      title:"Banking & Financial",
      image:"../../../assets/nest8.jpg",
      link:"mobility",
      description:"The Banking and Financial Services (BFS) Group at NeST Digital has established itself with over two decades of experience as a pioneer and leader in the GCC market by providing payment platform solutions – advanced payment solutions based on scalable microarchitecture & technology implemented to over 30 leading financial institutions is a testimony to its established credentials.",
    },
    {
      id:5,
      title:"GIS",
      image:"../../../assets/nest9.jpg",
      link:"mobility",
      description:"GIS stands for Geographic Information System and is a computer-based tool that stores, analyzes, and visualizes geographic data. GIS uses location as a key index variable for other information, and connects data to a map to integrate location data with descriptive information.",
    },   {
      id:6,
      title:"Healthcare",
      image:"../../../assets/nest10.jpg",
      link:"mobility",
      description:"Healthcare software development is vital for modern healthcare systems. With advancing technology, providers rely on software solutions to streamline operations, improve patient care, and boost outcomes. NeST Digital offers a range of healthcare software solutions, from patient monitoring to virtual reality simulations for medical training.",
    },

  ]

}
