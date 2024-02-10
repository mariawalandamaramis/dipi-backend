'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('DonationPackages', [
      {
        "inovation_id":"17",
        "package_name": "1 Sandal sisi kiri",
        "nominal": 100000,
        "description": "Deskripsi Paket 1",
        "souvenir": "Deskripsi Souvenir 1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "inovation_id":"17",
        "package_name": "2 Sandal sisi kiri. 1 Sandal sisi kanan",
        "nominal": 250000,
        "description": "Deskripsi Paket 2",
        "souvenir": "Deskripsi Souvenir 2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "inovation_id":"17",
        "package_name": "1 Sandal sisi kanan kiri. 2 Tali sandal",
        "nominal": 40000,
        "description": "Deskripsi Paket 3",
        "souvenir": "Deskripsi Souvenir 3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "inovation_id" : "18",
        "package_name": "Gelas ukiran nama",
        "nominal": 200000,
        "description": "Deskripsi Paket 1",
        "souvenir": "Deskripsi Souvenir 1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "inovation_id" : "18",
        "package_name": "Gelas ukiran nama Jumbo",
        "nominal": 350000,
        "description": "Deskripsi Paket 2",
        "souvenir": "Deskripsi Souvenir 2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "inovation_id" : "18",
        "package_name": "Gelas ukiran nama Jumbo dan Gagang gelas kayu",
        "nominal": 40000,
        "description": "Deskripsi Paket 3",
        "souvenir": "Deskripsi Souvenir 3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "inovation_id": "19",
        "package_name": "Voucher pulsa 1000",
        "nominal": 50000,
        "description": "Deskripsi Paket 1",
        "souvenir": "Deskripsi Souvenir 1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "inovation_id": "19",
        "package_name": "Voucher pulsa 5000",
        "nominal": 150000,
        "description": "Deskripsi Paket 2",
        "souvenir": "Deskripsi Souvenir 2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "inovation_id": "19",
        "package_name": "Voucher pulsa 10000",
        "nominal": 175000,
        "description": "Deskripsi Paket 3",
        "souvenir": "Deskripsi Souvenir 3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "inovation_id": "20",
        "package_name": "Gelas ukiran namaBantal merah tahan banting",
        "nominal": 100000,
        "description": "Deskripsi Paket 1",
        "souvenir": "Deskripsi Souvenir 1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "inovation_id": "20",
        "package_name": "Bantal mini buat nangis. Guling lebar kalo kangen",
        "nominal": 250000,
        "description": "Deskripsi Paket 2",
        "souvenir": "Deskripsi Souvenir 2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "inovation_id": "20",
        "package_name": "Bantal mini buat nangis. Guling kecil biasa. Selimut loreng-loreng.",
        "nominal": 400000,
        "description": "Deskripsi Paket 3",
        "souvenir": "Deskripsi Souvenir 3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "inovation_id": "21",
        "package_name": "Korden bentuk apel",
        "nominal": 40000,
        "description": "Deskripsi Paket 1",
        "souvenir": "Deskripsi Souvenir 1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "inovation_id": "21",
        "package_name": "Karpet bulu mini bentuk apel",
        "nominal": 60000,
        "description": "Deskripsi Paket 2",
        "souvenir": "Deskripsi Souvenir 2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "inovation_id": "21",
        "package_name": "Kapet Jumbo bentuk apel",
        "nominal": 100000,
        "description": "Deskripsi Paket 3",
        "souvenir": "Deskripsi Souvenir 3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "inovation_id": "22",
        "package_name": "Payung kepala mini",
        "nominal": 500000,
        "description": "Deskripsi Paket 1",
        "souvenir": "Deskripsi Souvenir 1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "inovation_id": "22",
        "package_name": "Payung lipat biasa",
        "nominal": 700000,
        "description": "Deskripsi Paket 2",
        "souvenir": "Deskripsi Souvenir 2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "inovation_id": "22",
        "package_name": "Payung pantai warna-warni",
        "nominal": 900000,
        "description": "Deskripsi Paket 3",
        "souvenir": "Deskripsi Souvenir 3",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('DonationPackages', null, {});
  }
};
