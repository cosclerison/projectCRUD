import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onGoToEdit(Item: any): void{
    this.router.navigate(['edit']);
  }
  onGoToDetails(Item: any): void{
    this.router.navigate(['details']);
  }
  onGoToDelete(Item: any): void{
    alert('Deleted');
  }

}
