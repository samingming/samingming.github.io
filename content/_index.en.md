---
title: "Home"
type: landing

blocks:
  - block: slider
    content:
      slides:
        - title: "AI Game Development"
          cta_label: "Go"
          cta_url: '{{< relref "project/game" >}}'
          image:
            filename: "/media/slide-1.jpg"
            focal_point: center

        - title: "AI Image Generation"
          cta_label: "Go"
          cta_url: '{{< relref "project/AI" >}}'
          image:
            filename: "/media/slide-2.jpg"
            focal_point: center

        - title: "Fake Review Detection"
          cta_label: "Go"
          cta_url: '{{< relref "project/Review" >}}'
          image:
            filename: "/media/slide-3.jpg"
            focal_point: center
    design:
      height: 420
      autoplay: true
      interval: 3000
---
