import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

export interface UserModel {
  firstname: string;
  lastname: string;
  age: number;
  gender: string;
}

const ELEMENT_DATA: UserModel[] = [
  {firstname: 'Hydrogen', lastname: 'Hydrogen', age: 1, gender: 'M'},
  {firstname: 'Helium', lastname: 'Helium', age: 4, gender: 'M'},
  {firstname: 'Lithium', lastname: 'Lithium', age: 6, gender: 'F'},
  {firstname: 'Beryllium', lastname: 'Beryllium', age: 9, gender: 'M'},
  {firstname: 'Boron', lastname: 'Boron', age: 10, gender: 'M'},
  {firstname: 'Carbon', lastname: 'Carbon', age: 12, gender: 'F'},
  {firstname: 'Nitrogen', lastname: 'Nitrogen', age: 14, gender: 'F'},
  {firstname: 'Oxygen', lastname: 'Oxygen', age: 15, gender: 'M'},
  {firstname: 'Fluorine', lastname: 'Fluorine', age: 18, gender: 'F'},
  {firstname: 'Neon', lastname: 'Neon', age: 20, gender: 'F'},
  {firstname: 'Oxygen', lastname: 'Oxygen', age: 15, gender: 'M'},
  {firstname: 'Fluorine', lastname: 'Fluorine', age: 18, gender: 'F'},
  {firstname: 'Neon', lastname: 'Neon', age: 20, gender: 'F'},
];

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatPaginatorModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent implements AfterViewInit  {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['firstname', 'lastname', 'age', 'gender', 'action'];
  dataSource = new MatTableDataSource<UserModel>(ELEMENT_DATA);

  ngAfterViewInit (): void {
    this.dataSource.paginator = this.paginator;
  }
}
