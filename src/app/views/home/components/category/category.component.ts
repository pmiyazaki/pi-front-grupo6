import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categoryData = [
    {
      type: 'Cachorro',
      img: '../../assets/images/dog.png',
    },
    {
      type: 'Gato',
      img: '../../assets/images/cat.png',
    },
    {
      type: 'Outros',
      img: '../../assets/images/adoption.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
