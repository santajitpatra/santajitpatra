import Link from 'next/link';
import React from 'react'

function DownloadCV() {
  return (
    <section className="container mx-auto text-center py-6 mb-12">
      <h3 className="w-full my-2 text-4xl font-bold leading-tight text-center text-white">
        Learn more about Me and My experience
      </h3>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t" />
      </div>
      <p className="my-4 text-lg leading-normal">
        my CV provides a detailed overview of my skills and experience. <br />
        Click here to download my CV and learn more about me.
      </p>
      <Link href="/" className="btn-primary">
        Download CV
      </Link>
    </section>
  );
}

export default DownloadCV