import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  contents = [
    {title: 'Content 1',
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget metus in enim mollis dignissim quis quis risus. Sed lacus dolor, pretium quis massa non, pharetra convallis ligula. Pellentesque placerat nisl id ultricies consequat. Quisque in porttitor tellus. Cras vel consectetur est. Duis a magna congue, mollis velit in, rhoncus diam. In odio mi, finibus ut mattis a, interdum vel diam. Phasellus ex ex, condimentum sed dapibus vel, ornare sed sem. Cras quis venenatis urna. Fusce mattis ligula ac elit eleifend ornare. Aenean nibh elit, pharetra vel velit eu, porta lobortis arcu."
  },
  {title: 'Content 2',
  text: 'Proin a nisl commodo magna gravida posuere sagittis non risus. Mauris a porta tortor, et ultricies dolor. Sed posuere sem interdum erat euismod, vel fringilla mi commodo. Aliquam a maximus nulla. In sodales neque ac felis laoreet, sed varius quam convallis. Vivamus tempor hendrerit lorem non tempus. Aliquam erat volutpat. Donec ut odio nec elit hendrerit rutrum eget in mi.'},
  {title: 'Content 3',
  text: 'Proin a nisl commodo magna gravida posuere sagittis non risus. Mauris a porta tortor, et ultricies dolor. Sed posuere sem interdum erat euismod, vel fringilla mi commodo. Aliquam a maximus nulla. In sodales neque ac felis laoreet, sed varius quam convallis. Vivamus tempor hendrerit lorem non tempus. Aliquam erat volutpat. Donec ut odio nec elit hendrerit rutrum eget in mi.'},
  {title: 'Content 4',
  text: 'Proin a nisl commodo magna gravida posuere sagittis non risus. Mauris a porta tortor, et ultricies dolor. Sed posuere sem interdum erat euismod, vel fringilla mi commodo. Aliquam a maximus nulla. In sodales neque ac felis laoreet, sed varius quam convallis. Vivamus tempor hendrerit lorem non tempus. Aliquam erat volutpat. Donec ut odio nec elit hendrerit rutrum eget in mi.'},
  {title: 'Content 5',
  text: 'Proin a nisl commodo magna gravida posuere sagittis non risus. Mauris a porta tortor, et ultricies dolor. Sed posuere sem interdum erat euismod, vel fringilla mi commodo. Aliquam a maximus nulla. In sodales neque ac felis laoreet, sed varius quam convallis. Vivamus tempor hendrerit lorem non tempus. Aliquam erat volutpat. Donec ut odio nec elit hendrerit rutrum eget in mi.'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
