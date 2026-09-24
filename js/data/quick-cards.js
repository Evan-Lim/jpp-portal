(function () {
  'use strict';
  window.JPP = window.JPP || {};
  window.JPP.data = window.JPP.data || {};

  var ICON = {
    warning:  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M12 15h.01"/><path d="M12 7v4"/></svg>',
    camera:   '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/></svg>',
    calendar: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 2v3M16 2v3M3 9h18"/></svg>',
    landmark: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 18v-7M14 18v-7M18 18v-7M6 18v-7M3 22h18M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z"/></svg>',
    messages: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"/></svg>',
    bag:      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>'
  };

  window.JPP.data.quickCards = [
    { number: 1, color: 'red', featured: true,
      eyebrow: 'SUARA PELAJAR', badge: 'AKSES UTAMA',
      title: 'Peti Aduan',
      description: 'Hantar aduan atau cadangan dengan teratur, kemudian semak perkembangan menggunakan nombor rujukan.',
      cta: 'Hantar atau semak aduan', href: 'aduan.html', icon: ICON.warning },
    { number: 2, color: 'blue', featured: true,
      eyebrow: 'SISTEM GALERI', badge: 'ALBUM RASMI',
      title: 'Galeri Acara JPP KMS',
      description: 'Cari foto rasmi mengikut nama acara dan buka album yang tepat tanpa menyelongkar satu folder besar.',
      cta: 'Cari foto acara', href: 'galeri.html', icon: ICON.camera },
    { number: 3, color: 'gold', eyebrow: 'TAKWIM SEMASA', title: 'Takwim JPP',
      description: 'Semak tentatif, tarikh penting dan kiraan masa menuju PSPM.',
      cta: 'Semak program', href: 'program.html', icon: ICON.calendar },
    { number: 4, color: 'navy', eyebrow: 'KENALI BARISAN', title: 'Kenali JPP',
      description: 'Lihat Majlis Tertinggi, EXCO dan profil wakil pelajar.',
      cta: 'Kenali barisan', href: 'organisasi.html', icon: ICON.landmark },
    { number: 5, color: 'purple', eyebrow: 'ALBUM RASMI', title: 'Detik JPP',
      description: 'Ikuti cerita, gerak kerja dan kenangan yang membentuk barisan JPP 26/27.',
      cta: 'Lihat detik kami', href: 'acara.html', icon: ICON.camera },
    { number: 6, color: 'teal', eyebrow: 'SUARA KOMUNITI', title: 'Ruang Komuniti',
      description: 'Kongsi program, sumbangkan idea dan sertai perbincangan warga KMS.',
      cta: 'Sertai perbincangan', href: 'komuniti.html', icon: ICON.messages },
    { number: 7, color: 'gold', eyebrow: 'JUALAN JPP', badge: 'RM12', title: 'Merchandise',
      description: 'Tempah lanyard rasmi KMS dengan pembayaran QR dan ambil di Kaunter Bilik JPP.',
      cta: 'Lihat lanyard', href: 'merchandise.html', icon: ICON.bag }
  ];
})();