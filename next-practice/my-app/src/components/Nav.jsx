import React from 'react'
import Link from 'next/link'


const Nav = () => {
  return (
    <ul>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/about">About</Link>
        </li>
        <li>
            <Link href="/posts">Posts</Link>
        </li>
        <li>
            <Link href="/notes">Notes</Link>
        </li>
        <li>
            <Link href="/notes-create">Create Notes</Link>
        </li>
    </ul>
  )
}

export default Nav