import { useContext, useState, useEffect } from 'react'
import styles from './NavigateBottomHeaderOnPc.module.scss'
import { Link } from 'react-router-dom'
import { fixHeaderContext } from '../Header'

const navBottomItems = [
  {
    title: ' GIỚI THIỆU',
    link: '/saa',
    children: [
      {
        title: 'Thông điệp của giám đốc ',
        link: '/g'
      },
      {
        title: 'Tổng quan',
        link: '/gg'
      }
    ]
  },
  {
    title: 'TIN TỨC',
    link: '/s',
    children: [
      {
        title: 'Thông điệp của giám đốc ',
        link: '/ga'
      },
      {
        title: 'Tổng quan',
        link: '/gd'
      }
    ]
  },
  {
    title: 'SỰ KIỆN NỔI BẬT',
    link: '/ss',
    children: [
      {
        title: 'Thông điệp của giám đốc ',
        link: '/g3'
      },
      {
        title: 'Tổng quan',
        link: '/g5'
      }
    ]
  },
  {
    title: 'TUYỂN SINH',
    link: '/st',
    children: [
      {
        title: 'Thông điệp của giám đốc ',
        link: '/gj'
      },
      {
        title: 'Tổng quan',
        link: '/gl'
      }
    ]
  },
  {
    title: 'ĐÀO TẠO',
    link: '/svs',
    children: [
      {
        title: 'Thông điệp của giám đốc ',
        link: '/gsa'
      },
      {
        title: 'Tổng quan',
        link: '/gc'
      }
    ]
  },

  {
    title: 'SINH VIÊN',
    link: '/sxx',
    children: [
      {
        title: 'Thông điệp của giám đốc ',
        link: '/gbb'
      },
      {
        title: 'Tổng quan',
        link: '/gmm'
      }
    ]
  },
  {
    title: 'NGHIÊN CỨU',
    link: '/sdd',
    children: [
      {
        title: 'Thông điệp của giám đốc ',
        link: '/gcc'
      },
      {
        title: 'Tổng quan',
        link: '/gzz',
        children: [
          {
            title: 'Thông điệp của giám đốc',
            link: '/guu'
          },
          {
            title: 'Tổng quan',
            link: '/gee'
          }
        ]
      },
      {
        title: 'eHUST',
        link: '/sq',
        children: [
          {
            title: 'Thông điệp của giám đốc ',
            link: '/goi'
          },
          {
            title: 'Tổng quan',
            link: '/gew'
          }
        ]
      }
    ]
  },
  {
    title: 'HỢP TÁC ĐỐI NGOẠI',
    link: '/sad',
    children: [
      {
        title: 'Thông điệp của giám đốc',
        link: '/gda'
      },
      {
        title: 'Tổng quan',
        link: '/gfs'
      }
    ]
  },
  {
    title: 'eHUST',
    link: '/sff',
    children: [
      {
        title: 'Thông điệp của giám đốc ',
        link: '/gbb'
      },
      {
        title: 'Tổng quan',
        link: '/bbg'
      }
    ]
  }
]

function NavigateBottomHeaderOnPc() {
  const fixHeader = useContext(fixHeaderContext)
  const [hiddenWhenFirstApp, setHiddenWhenFirstApp] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setHiddenWhenFirstApp(false)
    }, 500)
  }, [])

  // `${isFixHeader ? styles.wrapper : ''} ${styles.Wrapper}`
  return (
    <div className={fixHeader ? styles.wrapperNavBottom : ''}>
      <ul className={styles.navBottomList}>
        {navBottomItems.map((item) => (
          <li className={hiddenWhenFirstApp ? styles.hiddenWhenFirstApp : ''} key={item.link}>
            <Link className={styles.navBottomItem} to={item.link}>
              {item.title}
              {item && item.children && (
                <ul className={styles.listNav}>
                  {item.children.map((item2) => (
                    <li key={item2.link} className={styles.listNavItem}>
                      <Link className={styles.itemNav} to={item2.link}>
                        {item2.title}
                        {item2 && item2.children && (
                          <ul className={styles.listNav2}>
                            {item2.children.map((item3) => (
                              <li key={item3.link} className={styles.listNavItem}>
                                <Link className={styles.itemNav} to={item3.link}>
                                  {item3.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavigateBottomHeaderOnPc
