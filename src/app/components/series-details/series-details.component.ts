import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../core/services/api/api.service';
import { SeriesDetails } from '../../interfaces/series/series-details';

@Component({
  selector: 'app-series-details',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './series-details.component.html',
  styleUrl: './series-details.component.scss'
})
export class SeriesDetailsComponent {
  id: string | undefined;
  seriesDetails: SeriesDetails | undefined;

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getSeriesDetails()
  }

  private getSeriesDetails() {
    this.api.getSeriesDetails(this.getSeriesId())
      .subscribe((res) => {
        this.seriesDetails = res;
      });
  }

  private getSeriesId(): string {
    return this.route.snapshot.paramMap.get('id')!;
  }
}
