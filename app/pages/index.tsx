import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

const Home: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Three.jsのセットアップ
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    canvasRef.current?.appendChild(renderer.domElement)

    // 3Dオブジェクトの作成
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    camera.position.z = 5

    // GSAPのアニメーション
    gsap.to(cube.rotation, { duration: 2, x: Math.PI * 2, repeat: -1, ease: 'linear' })

    // アニメーションループ
    function animate() {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }
    animate()

    // クリーンアップ
    return () => {
      canvasRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div>
      <div ref={canvasRef} />
    </div>
  )
}

export default Home