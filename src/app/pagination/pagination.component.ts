import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() totalPages!: number;
  @Input() currentPage!: number;
  @Output() onPageChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
  }

  getPageArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  changePage(page: number) {
    this.onPageChange.emit(page);
  }
  goToFirstPage() {
    this.changePage(1);
  }
  goToLastPage() {
    this.changePage(this.totalPages);
  }
}
