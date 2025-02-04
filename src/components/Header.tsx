import React from "react";
import Link from "next/link";
import { AppBar, Toolbar, IconButton, Badge } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white', boxShadow: 1, zIndex: 1201 }}>
      <Toolbar className="flex justify-between items-center">
        {/* 햄버거 버튼 */}
        <IconButton edge="start" color="inherit" aria-label="menu">
          <span className="text-black">☰</span>
        </IconButton>

        {/* 로고 */}
        <div className="flex-1 text-left">
          <Link href="/" className="text-xl ml-3 font-bold text-black">
            MyLogo
          </Link>
        </div>

        {/* 카드 버튼 */}
        <IconButton edge="end" color="inherit" aria-label="card">
          <img src="/icon/card.svg" alt="Card" className="mr-3 w-6 h-6" />
        </IconButton>

        {/* 알림 버튼 */}
        <IconButton edge="end" color="inherit" aria-label="notifications">
          <Badge badgeContent={0} color="error">
            <img src="/icon/alert.svg" alt="Alert" className="w-6 h-6" />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
