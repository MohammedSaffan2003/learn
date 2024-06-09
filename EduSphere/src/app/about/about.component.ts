import { Component } from '@angular/core';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ContactUsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  title = 'About EduSphere';
  description = 'EduSphere is a premier e-learning platform dedicated to providing top-notch educational resources and courses to help you expand your horizons. Our mission is to make quality education accessible to everyone, everywhere.';
  imageUrl = 'about-image1.jpg';

  
}
