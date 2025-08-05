# 🎓 Teacher Resource Marketplace MVP

A modern SaaS marketplace for teachers to sell and buy high-quality lesson plans and educational resources. Built with Next.js, TypeScript, and Material-UI.

## ✨ Features

### 👨‍🏫 **For Teachers**
- Register and create teacher accounts
- Upload lesson plans with rich metadata
- Manage listings and track sales
- View earnings and performance analytics

### 🛒 **For Buyers**
- Browse marketplace with advanced filters
- Search by subject, grade level, and price
- Purchase and download lesson plans
- Secure checkout process

### 👨‍💼 **For Admins**
- Approve/reject lesson submissions
- Manage user accounts and roles
- Track 10% commission on sales
- Monitor marketplace activity

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Material-UI
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: SQLite (development), PostgreSQL (production ready)
- **Authentication**: NextAuth.js with credentials provider
- **Styling**: MUI with custom theme (Poppins font, brand colors)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/teacher-marketplace.git
cd teacher-marketplace
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Set up the database**
```bash
npx prisma migrate dev --name init
npx prisma generate
```

5. **Run the development server**
```bash
npm run dev
```

6. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
saas-marketplace/
├── app/
│   ├── api/                    # API routes
│   │   ├── auth/              # Authentication endpoints
│   │   ├── lessons/           # Lesson management
│   │   ├── sales/             # Sales processing
│   │   └── admin/             # Admin functions
│   ├── teacher/               # Teacher dashboard pages
│   ├── admin/                 # Admin dashboard pages
│   ├── marketplace/           # Buyer marketplace
│   ├── lesson/                # Lesson details
│   └── checkout/              # Purchase flow
├── prisma/                    # Database schema
├── generated/                 # Prisma client
└── public/                    # Static assets
```

## 🎨 Design System

- **Primary Color**: #6D9773 (Forest Green)
- **Accent Color**: #FFBA00 (Golden Yellow)
- **Font**: Poppins (Google Fonts)
- **Responsive**: Mobile-first design

## 🔐 Authentication

The app uses NextAuth.js with a credentials provider:

- **Registration**: Email/password with role selection
- **Login**: Secure session management
- **Roles**: Teacher, Buyer, Admin
- **Session**: JWT-based with secure cookies

## 📊 Database Schema

### Core Models
- **User**: Teachers, buyers, and admins
- **Lesson**: Lesson plans with metadata
- **Sale**: Purchase transactions
- **Commission**: Admin revenue tracking

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically on push

### Manual Deployment
```bash
npm run build
npm start
```

## 🔧 Environment Variables

```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

## 📈 Roadmap

- [ ] File upload with cloud storage
- [ ] Payment processing (Stripe)
- [ ] Email notifications
- [ ] Advanced search and filters
- [ ] Teacher analytics dashboard
- [ ] Mobile app
- [ ] Multi-language support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Material-UI for the component library
- Prisma team for the excellent ORM
- All contributors and supporters

---

**Built with ❤️ for educators worldwide**
